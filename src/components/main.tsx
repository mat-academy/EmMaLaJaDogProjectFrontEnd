import TopThree from "./topthree";
import Vote from "./vote";
import TopTen from "./topten";
import { useEffect } from "react";


export default function Main():JSX.Element {

    useEffect(() => { async function GetDogPix () {
            const response = await axios
        }})
 
        return (
            <>
                <TopThree/>
                <Vote/>
                <TopTen/>
            </>
        )
    }