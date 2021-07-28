import { Container } from "./HeaderStyles";
import { SchoolSharp, ChevronDownSharp } from 'react-ionicons';

export default function Header (){
    return (
        <Container>
            <div>
                <SchoolSharp
                    color={'#b2b6b8'} 
                    height="40px"
                    width="40px"
                    style={{cursor: 'pointer'}}
                />
                <h1>RepoProvas</h1>
            </div>
            <div className="options">
                <p>Submeter</p>
                <p>Provas</p>
                <p>Contato</p>
            </div>
            <div>
                <ChevronDownSharp
                    color={'#b2b6b8'} 
                    height="30px"
                    width="30px"
                    style={{cursor: 'pointer'}}
                />
                <img src="https://i.pinimg.com/736x/47/b9/79/47b97903c3867b10067f60c3d5bec300.jpg" alt="stitch"/>

            </div>
        </Container>
    )

}