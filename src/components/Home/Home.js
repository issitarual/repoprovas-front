import Header from "../communs/Header/Header";
import { Container, Subject, Types, List } from "./HomeStyles";
import { CalculatorSharp, RocketSharp } from 'react-ionicons'

export default function Home(){
    return(
        <Container>
            <Types>
                <h2>Matérias</h2>
                <button>
                    Ver mais +
                </button>
            </Types>
            <List>
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
            </List>
            <Types>
                <h2>Professores</h2>
                <button>Ver mais +</button>
            </Types>
        </Container>
    )
}

