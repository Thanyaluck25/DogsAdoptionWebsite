import { Component } from "react";
import "./DogStyles.css";

class DogData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="dog-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="dogimg" src={this.props.img1}/>
                    <img alt="dogimg" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default DogData;