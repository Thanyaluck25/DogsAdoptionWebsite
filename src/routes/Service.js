import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export default function Service (){
    return (
        <div>
            <Navbar />
            <Hero 
            cName = "hero-mid"
            heroImg = "https://wallpaperaccess.com/full/264291.jpg"
            title = "Adopt"
            url="/"
            btnClass="hide"/>
        </div>
    )
}