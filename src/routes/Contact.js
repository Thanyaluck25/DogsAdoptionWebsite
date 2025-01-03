import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

export default function Contact (){
    return (
        <div>
            <Navbar />
            <Hero 
            cName = "hero-mid"
            heroImg = "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            title = "Contact"
            url="/"
            btnClass="hide"/>
            <ContactForm />
            <Footer />
        </div>
    )
}