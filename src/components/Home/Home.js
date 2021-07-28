import Header from "../communs/Header/Header";
import { Container, Subject } from "./HomeStyles";
import { CalculatorSharp, RocketSharp } from 'react-ionicons'

export default function Home(){
    return(
        <Container>
            <h2>Matérias</h2>
                <Subject>
                    <CalculatorSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Cálculo I</p>
                </Subject>
                <Subject>
                    <CalculatorSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Cálculo II</p>
                </Subject>
                <Subject>
                    <CalculatorSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Cálculo III</p>
                </Subject>
                <Subject>
                    <CalculatorSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Cálculo IV</p>
                </Subject>
                <Subject>
                    <RocketSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Física I</p>
                </Subject>
            <h2>Professores</h2>
        </Container>
    )
}

