import { useEffect, useState } from "react";
import axios from "axios";
import nameToImageURL from "../utils/nameToImageURL";
import TopDogFullInfoCard from "./TopDogFullInfoCard";
import fakeDog from "../images/FakeDog.png";
import { readNameFormatter } from "../utils/readNameFormatter";

//top10list
//endless scroll component
//goes through the ten topdogs

interface TopDogsInterface {
  breed_name: string;
  count: number;
}
interface topTenFullInfoInterface extends TopDogsInterface {
  image_url: string;
}
// When toggleValue changes it fetches data from our database
interface TopTenProps {
  top10Dogs: TopDogsInterface[];
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleValue: boolean;
}

/*
For 10 images/dog cards, if we set it so 3 are visible at any time then we will
need to add the first 3 cards again at the end of the loop and change the translate percentage
from 50 to 76.9% roughly.
*/

export default function TopTen(props: TopTenProps): JSX.Element {
  // Is the useState for the top10Dogs object
  const [topTenFullInfo, setTopTenFullInfo] = useState<
    topTenFullInfoInterface[]
  >([]);

  useEffect(() => {
    // builds a random dog Image from the breed name
    const getAllImageURL = async () => {
      const mapDogToFullInfo = async (dogInfo: TopDogsInterface) => {
        // helper function used to replace the '-' to a '/' if present in breed_name
        const name_url = nameToImageURL(dogInfo.breed_name);
        const URL_STRING =
          "https://dog.ceo/api/breed/" + name_url + "/images/random";
        try {
          // axios pulls dog information for carousel and package it into an object
          const resp = await axios.get(URL_STRING);
          const imageURL: string = resp.data.message;

          console.log(imageURL);

          const dogFullInfo: topTenFullInfoInterface = {
            breed_name: dogInfo.breed_name,
            count: dogInfo.count,
            image_url: imageURL,
          };

          return dogFullInfo;
        } catch (error) {
          // builds an alternative object if try element fails
          console.error(error);
          return {
            breed_name: dogInfo.breed_name,
            count: dogInfo.count,
            image_url: fakeDog,
          };
        }
      };

      // Mapping top dogs
      const unresolvedMappedTopDogs = props.top10Dogs.map(mapDogToFullInfo);
      // Wait for every element to be resolved and returns an array
      const newTopTenFullInfo = await Promise.all(unresolvedMappedTopDogs);
      // We use the top3 Dogs to cover the refresh time of the carousel
      const topThreeFullInfo = newTopTenFullInfo.slice(0, 7);
      // We are initialising the state topTenFullInfo
      setTopTenFullInfo([...newTopTenFullInfo, ...topThreeFullInfo]);
    };
    getAllImageURL();
  }, [props.top10Dogs]);

  // We are mapping our top10 Dogs into our TopDogFullInfoCard custom component
  const Top10Carousel: JSX.Element[] = topTenFullInfo.map((dogInfo, index) => (
    <TopDogFullInfoCard
      key={index}
      position={index}
      breed_name={readNameFormatter(dogInfo.breed_name)}
      count={dogInfo.count}
      image_url={dogInfo.image_url}
    />
  ));
  // We are returning our top10Carousel in our return statement
  return (
    <>
      <h1 className="title">POPULAR BREEDS</h1>
      {topTenFullInfo.length > 1 && (
        <section className="top10">
          <div className="photobanner">{Top10Carousel}</div>
        </section>
      )}
    </>
  );
}
