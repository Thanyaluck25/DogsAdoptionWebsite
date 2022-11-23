import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export default function About (){

    return (
        <div>
            <Navbar />
            <Hero 
            cName = "hero-mid"
            heroImg = "https://wallpaperaccess.com/full/264334.jpg"
            title = "About"
            url="/"
            btnClass="hide"/>
        </div>
    )
}