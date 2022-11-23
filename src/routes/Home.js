import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Dog from "../components/Dog"
import Adopt from "../components/Adopt"
import Footer from "../components/Footer"

export default function Home (){
    return (
        <div>
            <Navbar />
            <Hero 
            cName = "hero"
            heroImg = "https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title = "'Rescued' is my favourite breed."
            btnText = "Adopt Here!"
            url="/"
            btnClass="show"
            />
            <Dog />
            <Adopt />
            <Footer />

        </div>
    )
}