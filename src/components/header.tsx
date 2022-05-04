// to include logo, header text, vote text
import dog_logo from "../images/dog-logo.svg"

export default function Header():JSX.Element {
    return (
        <section id="header">
        <img src={dog_logo} alt="logo of dog"/>
        <h1> Pupvote </h1>
        <h2> Vote for a good boy today </h2>
        </section>
    )
}