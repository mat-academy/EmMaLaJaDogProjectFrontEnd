//top3breed
//separate component:
//title, flexbox with 3 dogs
import { readNameFormatter } from "../utils/readNameFormatter";

interface TopDogsInterface {
  breed_name: string;
  count: number;
}

interface TopThreeProps {
  top10Dogs: TopDogsInterface[];
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleValue: boolean;
}

export default function TopThree(props: TopThreeProps): JSX.Element {
  const top3Dogs = props.top10Dogs.slice(0, 3);

  function handleClick() {
    props.toggle(!props.toggleValue);
  }

  const voteMax = top3Dogs[0].count;
  const dog1Score = 10;

  const dog2Score = Math.round((top3Dogs[1].count/voteMax) * 10 )
  const dog3Score = Math.round((top3Dogs[2].count/voteMax) * 10 )


  function getPawsArray(score: number): string[]{ 
    let count = 0;
    const arr = []
    while (count < score){
      arr.push("🐾")
      count ++
    }
    return arr
  }

  const dogPawArray1 = getPawsArray(dog1Score)
  const dogPawArray2 = getPawsArray(dog2Score)
  const dogPawArray3 = getPawsArray(dog3Score)
  return (
    <>
      <h1 className="title">TOP BREEDS</h1>
      <div className="top3">
        <div className="top3--element">
          <h3>{readNameFormatter(top3Dogs[0].breed_name)}</h3>
          <h2 className="pawbar">{dogPawArray1}</h2>
          <h3>⭐ {top3Dogs[0].count}</h3>
        </div>
        <div className="top3--element">
          <h3>{readNameFormatter(top3Dogs[1].breed_name)}</h3>
          <h2 className="pawbar">{dogPawArray2}</h2>
          <h3>⭐ {top3Dogs[1].count}</h3>
        </div>
        <div className="top3--element">
          <h3>{readNameFormatter(top3Dogs[2].breed_name)}</h3>
          <h2 className="pawbar">{dogPawArray3}</h2>
          <h3>⭐ {top3Dogs[2].count}</h3>
        </div>
      </div>
      <div className="top3--button">
        <button className="button--refresh" onClick={handleClick}>
          Refresh
        </button>
      </div>
    </>
  );
}
