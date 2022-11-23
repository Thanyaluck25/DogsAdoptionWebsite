import "./DogStyles.css";
import DogData from "./DogData";

const Dog = ()=>{
    return (
        <div className="dog">
            <h1>Dog of The Year</h1>
            <DogData 
            className = "first-dog"
            heading = "Pembroke Welsh Corgi"
            text = "The Pembroke Welsh Corgi is known as one of the most agreeable of small house dogs and is a loyal, loving pet for families. They also are known for their intelligence and enthusiasm for working. Many Pembrokes compete in dog sports, such as agility, herding, conformation, obedience, and more." 
            img1 = "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            img2 = "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />

            <DogData
            className = "first-dog-reverse"
            heading = "Golden Retrievers"
            text = "Golden Retrievers are kind, trusting, and gentle. These traits make them very poor guard dogs, but excellent family dogs. They are intelligent, eager to please, playful, active, and highly trainable.They’re also prone to anxiety if left alone for long periods and do best with a demonstrative, involved owner." 
            img1 = "https://wallpaperaccess.com/full/1331898.jpg"
            img2 = "https://images.unsplash.com/photo-1616887446499-27116f0e3b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80"
            />
        </div>
    )
}

export default Dog;