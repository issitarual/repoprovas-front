import { Container, Subject, Types, List } from "./HomeStyles";
import { CalculatorSharp, RocketSharp, CellularSharp, DesktopSharp, CubeSharp } from 'react-ionicons'
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import { useHistory } from 'react-router';

export default function Home(){
    useEffect(() => {
        axios.get("https://api-respoprovas.herokuapp.com/professor")
        .then(success => {
            let object = {};
            let removeDuplicate = [];
            for (let i = 0; i < success.data.length; i++) {
              let item = success.data[i];
              if (!object[item.name]) {
                object[item.name] = true;
                removeDuplicate.push(item);
              }
            }
            setProfessor(removeDuplicate.slice(0, 12));
        })
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[]);
    const [professor, setProfessor] = useState([]);
    let history = useHistory();
    return(
        <Container>
            <Types>
                <h2>Matérias</h2>
                <button onClick={() => history.push("/test/subject")}>
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
                <button onClick={() => history.push("/test/professor")}>
                    Ver mais +
                </button>
            </Types>
            <List>
                {professor.map((n, i) => <Professor key={i} id={n.id} name={n.name}/>)}
            </List>
        </Container>
    )
}

