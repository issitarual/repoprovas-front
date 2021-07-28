import { SiInstagram, SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";
import { SocialMediaContainer } from "./FooterStyles";

export default function SocialMedia(){
    return(
        <SocialMediaContainer>
            <div onClick={() => socialMedia("instagram")}>
                <SiInstagram color="#fff"/>
            </div>
            <div onClick={() => socialMedia("twitter")}>
                <SiTwitter color="#fff"/>
            </div>
            <div onClick={() => socialMedia("facebook")}>
                <SiFacebook color="#fff"/>
            </div>
            <div onClick={() => socialMedia("youtube")}>
                <SiYoutube color="#fff"/>
            </div>
        </SocialMediaContainer>
    )
    function socialMedia(media){
        let website = "";
        if(media === "instagram"){
            website = "https://www.instagram.com"
        }
        else if(media === "facebook"){
            website = "https://pt-br.facebook.com"
        }
        else if(media === "youtube"){
            website = "https://www.youtube.com"
        }
        else if(media === "twitter"){
            website = "https://twitter.com/"
        }
        window.location.href = `${website}`;
    }
}