//top10list
//endless scroll component
//goes through the ten topdogs

interface TopDogsInterface {
  breed_name: string;
  count: number
 }

interface TopTenProps {
  top10Dogs: TopDogsInterface[],
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  toggleValue: boolean
}

export default function TopTen(props: TopTenProps): JSX.Element {


  return <>"Value"</>;
}
