import "./AdoptStyles.css"

export default function AdoptData(props){
    return(
        <div className="a-card">
            <div className="a-image">
                <img src={props.image} alt="dogforadoptionimg"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
