import { useEffect, useState } from "react";
import axios from "axios";
import nameToImageURL from "../utils/nameToImageURL";

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
  const [topTenFullInfo, setTopTenFullInfo] = useState<
    topTenFullInfoInterface[]
  >([]);

  useEffect(() => {
    const getAllImageURL = async () => {
      const mapDogToFullInfo = async (dogInfo: TopDogsInterface) => {
        const name_url = nameToImageURL(dogInfo.breed_name);
        const URL_STRING =
          "https://dog.ceo/api/breed/" + name_url + "/images/random";
        try {
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
          console.error(error);
          return {
            breed_name: dogInfo.breed_name,
            count: dogInfo.count,
            image_url: "",
          };
        }
      };

      const unresolvedMappedTopDogs = props.top10Dogs.map(mapDogToFullInfo);

      const newTopTenFullInfo = await Promise.all(unresolvedMappedTopDogs);

      setTopTenFullInfo(newTopTenFullInfo);
    };
    getAllImageURL();
  }, [props.top10Dogs]);

  return (
    <>
      <h1 className="title">POPULAR BREEDS</h1>
      {topTenFullInfo.length > 1 && topTenFullInfo[0].breed_name}
      <section className="top10">
        <div className="photobanner">
          <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
          <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
          <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
          <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
          <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
          <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
          <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
          <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
        </div>
      </section>
    </>
  );
}
