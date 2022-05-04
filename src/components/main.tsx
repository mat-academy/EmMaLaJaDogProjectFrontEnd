import TopThree from "./topthree";
import Vote from "./vote";
import TopTen from "./topten";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Main():JSX.Element {

const [dog1, setDog1] = useState<string>("")
const [dog2, setDog2] = useState<string>("")

useEffect(() => {async function GetDogPix () {
    const response1 = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
        )
    const response2 = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
        ) 
    setDog1 (response1.data.message) 
    setDog2 (response2.data.message)
    } 
    GetDogPix() 
} ,[]
)
 
        return (
            <>
                <TopThree/>
                <Vote/>
                <img src={dog1} alt=""/>
                <img src={dog2} alt=""/>
                <TopTen/>
            </>
        )
    }