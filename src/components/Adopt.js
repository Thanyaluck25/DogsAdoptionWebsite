import "./AdoptStyles.css"
import AdoptData from "./AdoptData"

export default function Adopt(){
    return(
        <div className="adopt">
            <h1>Dogs For Adoption</h1>
            <p className="para">Hundreds of dogs have already found homes all over Thailand. We can find a match for you. Choose compassion.</p>

            <div className="adoptcard">
                <AdoptData
                image = "https://www.soidog.org/sites/default/files/styles/large/public/soidog-adopt-image/Pupeye-2.jpg?itok=TEKQ1FlL"
                heading = "Pupeye"
                text = "I only allow a few people who I've learnt to trust here at the shelter walk me or give me fuss and pats. They believe that, with the right family, I have a lot of potential and love to offer. I just need that special someone who has the time and patience to get to know the real me. Is that special someone you?"
                 />

                <AdoptData
                image = "https://www.soidog.org/sites/default/files/styles/large/public/soidog-adopt-image/Arandy.jpg?itok=h0zGHyz-"
                heading = "Arandy"
                text = "I am looking for a home with no other dogs and no young children either. I know homes like these are not always easy to find, but I am hopefuly that there is someone out there who fits the bill and can give me the cuddles and care I need. Could that someone be you? Life will be fine and dandy if you pick me, Arandy!"
                 />

                <AdoptData
                image = "https://www.soidog.org/sites/default/files/styles/large/public/soidog-adopt-image/Daonapa.jpg?itok=GDIbksyN"
                heading = "Daonapa"
                text = "I know I can do even better with someone who understands me and will help me feel comfortable and safe again. My name means “sky full of stars” in Thai, and I am counting every one of those lucky stars that I will get the chance to find a home soon."
                 />
            </div>
        </div>
    )
}