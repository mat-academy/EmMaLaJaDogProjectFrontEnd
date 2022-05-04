//voteforgoodboy
//vote text, flexbox with two random dogs
import axios from "axios"
import {useState, useEffect} from 'react'
import { dogbreedfinder } from "../utils/dogbreedfinder";
import dog_heart from '../images/dog-heart.svg'



export default function Vote(): JSX.Element {
  const [dog1, setDog1] = useState<string>("");
  const [dog2, setDog2] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    async function GetDogPix() {
      const response1 = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const response2 = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDog1(response1.data.message);
      setDog2(response2.data.message);
    }
    GetDogPix();
  }, [submitted]);

  const dogbreed1 = dogbreedfinder(dog1)
  const dogbreed2 = dogbreedfinder(dog2)


  async function submitFavourites(dogbreed: string) {
    await axios.post('https://emmalaja-pupvote.herokuapp.com/',{
      breed_name: dogbreed
    })
    setSubmitted((previous) => !previous)
    console.log(submitFavourites)
  }


  return(
    <>
      <h1>VOTE NOW</h1>
      <section className="voting">
        <div className="voteCard">
          <img className='dogpic' src={dog1} alt=''/>
          <div className="dogprofile">
            
            <img onClick={() => submitFavourites(dogbreed1)} src={dog_heart} alt='' width={57} />
            <h3>{dogbreedfinder(dog1)}</h3>
          </div>
        </div>

        
        <div className="voteCard">
          <img className='dogpic' src={dog2} alt=''/>
          <div className="dogprofile">
            <img onClick={() => submitFavourites(dogbreed2)} src={dog_heart} alt='' width={57} />
            <h3>{dogbreedfinder(dog2)}</h3>
          </div>
        </div>
      </section>
    </>
  )
}
