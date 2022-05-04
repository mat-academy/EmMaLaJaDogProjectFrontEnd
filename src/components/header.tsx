// to include logo, header text, vote text
import dog_logo from "../images/dog-logo.svg";

export default function Header(): JSX.Element {
  return (
    <section className="header">
      <img className="logo" src={dog_logo} alt="logo of dog" />
      <h1 className="header--title"> PUPVOTE</h1>
      <h2 className="header--description">
        <strong> Vote for a good boy today </strong>
      </h2>
    </section>
  );
}
