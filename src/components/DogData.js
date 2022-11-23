import { Component } from "react";
import "./DogStyles.css";

class DogData extends Component{
    render(){
        return(
            <div className="first-dog">
                <div className="dog-text">
                    <h2>Pembroke Welsh Corgi</h2>
                    <p>
                    The Pembroke Welsh Corgi is known as one of the most agreeable of small house dogs and is a loyal, loving pet for families. 
                    They also are known for their intelligence and enthusiasm for working. 
                    Many Pembrokes compete in dog sports, such as agility, herding, conformation, obedience, and more.
                    </p>
                </div>

                <div className="image">
                    <img alt="dogimg" 
                    src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    />
                    <img alt="dogimg" 
                    src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    />
                </div>
            </div>

        )
    }
}