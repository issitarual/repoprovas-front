import { LogoContainer } from "./FooterStyles";
import { SchoolSharp } from 'react-ionicons';

export default function Options(){
    return(
        <LogoContainer>
            <SchoolSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{cursor: 'pointer'}}
            />
            <p>RepoProvas</p>
        </LogoContainer>
    )
}