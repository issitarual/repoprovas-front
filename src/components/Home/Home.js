import { Container, Subject, Types, List } from "./HomeStyles";
import { CalculatorSharp, RocketSharp, CellularSharp, DesktopSharp, CubeSharp, PersonSharp } from 'react-ionicons'

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
                <Subject>
                    <RocketSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Física II</p>
                </Subject>
                <Subject>
                    <RocketSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Física III</p>
                </Subject>
                <Subject>
                    <RocketSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Física IV</p>
                </Subject>
                <Subject>
                    <CubeSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Álgebra Linear</p>
                </Subject>
                <Subject>
                    <CellularSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>PROBEST</p>
                </Subject>
                <Subject>
                    <DesktopSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Computação I</p>
                </Subject>
                <Subject>
                    <DesktopSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Computação II</p>
                </Subject>
            </List>
            <Types>
                <h2>Professores</h2>
                <button>Ver mais +</button>
            </Types>
            <List>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Allan Goulart</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Ildeu Castro</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Felipe Acker</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Monique Carmona</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Gladston Duarte</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Hugo de Luna</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>Sidnei Percia</p>
                </Subject>
                <Subject>
                    <PersonSharp
                        color={'#b2b6b8'} 
                        height="25px"
                        width="25px"
                    />
                    <p>André Penna Firme</p>
                </Subject>
            </List>
        </Container>
    )
}

