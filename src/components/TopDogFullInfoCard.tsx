interface topDogFullInfoCardProps {
    position: number;
    breed_name: string;
    count: number;
    image_url: string;
}

export default function TopDogFullInfoCard(props: topDogFullInfoCardProps): JSX.Element {
    return (
        <>
        <section className="top10card">
            <h2>{props.breed_name}</h2>
            <div className="top10card--info">
            <h3>⭐ {props.count}</h3>
            <h3>{(props.position)%10 + 1}</h3>
            </div>
            <img className="dogpic" src={props.image_url} alt="dog"/>
        
        </section>
        </>
    )
}