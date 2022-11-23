import "./HeroStyles.css"

export default function Hero (props){
    return (
        <div className={props.cName}>
            <img alt="HeroImg" 
                 src={props.heroImg}>
            </img>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href="/">Adopt Plan</a>
            </div>
        </div>
    )
}