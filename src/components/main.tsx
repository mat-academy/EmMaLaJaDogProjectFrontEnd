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
  const [topDogs, setTopDogs] = useState<TopDogsInterface[]>([]);
  const [toggleRefresh, setToggleRefresh] = useState<boolean>(false);

  useEffect(() => {
    async function getTopDogs() {
      const response = await axios.get(
        "https://emmalaja-pupvote.herokuapp.com/votes"
      );
      setTopDogs(response.data);
    }
    getTopDogs();
  }, [toggleRefresh]);

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
