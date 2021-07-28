import { Container } from "./HeaderStyles";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Options from "./Options";
import User from "./User";

export default function Header (){
    return (
        <Container>
            <Link to="/">
                <Logo />
            </Link>
            <Options />
            <User />
        </Container>
    )

}