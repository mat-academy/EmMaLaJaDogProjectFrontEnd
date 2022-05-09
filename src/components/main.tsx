import TopThree from "./topthree";
import Vote from "./vote";
import TopTen from "./topten";
import { useState, useEffect } from "react";
import axios from "axios";

interface TopDogsInterface {
  breed_name: string;
  count: number;
}

export default function Main(): JSX.Element {
  // topDogs is an array that stores the breed_Names and vote count for the top10 dogs
  const [topDogs, setTopDogs] = useState<TopDogsInterface[]>([]);
  // toggleRefresh sets the refresh state to be false to prevent a refresh of the next render
  const [toggleRefresh, setToggleRefresh] = useState<boolean>(false);

  // GET request to pull the top10 dogs from our database
  useEffect(() => {
    async function getTopDogs() {
      const response = await axios.get(
        "https://emmalaja-pupvote.herokuapp.com/votes"
      );
      setTopDogs(response.data);
    }
    getTopDogs();
  }, [toggleRefresh]);

  /* returns child components with props being passed into them
  (topDogs.length > 1)expression only allows the props to be passed into child components when the array is populated
  */
  return (
    <>
      {topDogs.length > 1 && (
        <TopThree
          top10Dogs={topDogs}
          toggle={setToggleRefresh}
          toggleValue={toggleRefresh}
        />
      )}
      <Vote />
      {topDogs.length > 1 && (
        <TopTen
          top10Dogs={topDogs}
          toggle={setToggleRefresh}
          toggleValue={toggleRefresh}
        />
      )}
    </>
  );
}
