import TopThree from "./topthree";
import Vote from "./vote";
import TopTen from "./topten";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Main(): JSX.Element {
  

  

  return (
    <>
      <TopThree />
      <Vote />
      <TopTen />
    </>
  );
}
