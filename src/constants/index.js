import LoremIpsum from "react-lorem-ipsum";
import flowingConversation from "../assets/images/illustration-flowing-conversation.svg"; 
import growTogether from "../assets/images/illustration-grow-together.svg"; 
import yourUsers from "../assets/images/illustration-your-users.svg"; 
import location from "../assets/images/icon-location.svg"
import phone from "../assets/images/icon-phone.svg"
import email from "../assets/images/icon-email.svg"
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export const header = [
    {
        id: "1", 
        headerText: "Build The Community Your Fans Will Love", 
        headerBody: "Huddle re-images the way we build communities. You have a voice but so does your audience. Create connections with your users as you engage in genuine discussion.",
        headerButton: "Get Started For Free"
    }, 
]
export const cards = [
    { 
        id: "1", 
        image: growTogether,
        cardHeader: "Grow Together", 
        cardText: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
    }, 
    { 
        id: "2", 
        image: flowingConversation,
        cardHeader: "Flowing Conversations", 
        cardText: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
    },
    { 
        id: "3", 
        image: yourUsers,
        cardHeader: "Your Users", 
        cardText: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
    },
]
export const AboutUs = [
    { 
        id: "1", 
        content: "About Us"
    }, 
    { 
        id: "2", 
        content: "What We Do"
    },
    { 
        id: "3", 
        content: "FAQ"
    },
]

export const ContactUs = [
    { 
        id: "1", 
        content: "Career"
    }, 
    { 
        id: "2", 
        content: "Blog"
    }, 
    {
        id: "3", 
        content: "Contact Us"
    }
]
export const iconsDetails = [
    { 
        id: "1", 
        icon: location,
        content: <LoremIpsum avgSentencesPerParagraph = {2}></LoremIpsum>

    }, 
    { 
        id: "2", 
        icon:phone, 
        content: "+1-543-123-4567"
    }, 
    { 
        id: "3", 
        icon: email, 
        content: "example@fylo.com"
    }
]
export const BrandIcon = [
    { 
        id: "1",
        icon: faFacebook
    }, 
    { 
        id: "2", 
        icon: faTwitter
    }, 
    { 
        id: "3", 
        icon: faInstagram
    }
]