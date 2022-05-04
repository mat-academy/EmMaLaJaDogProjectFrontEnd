//top10list
//endless scroll component
//goes through the ten topdogs

interface TopDogsInterface {
  breed_name: string;
  count: number;
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
  return (
    <>
      <h1 className="title">POPULAR BREEDS</h1>
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
