import { Container } from "./FooterStyles";
import SocialMedia from "./SocialMedia";
import Options from "./Options";
import Logo from "./Logo";

export default function Footer(){
    return(
        <Container>
            <SocialMedia />
            <Options />
            <Logo />
        </Container>
    )
}