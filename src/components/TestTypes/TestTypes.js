import { Container, List } from "./TestTypesStyles";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import Subject from "./Subject";

export default function TestTypes(){
    let { type } = useParams();

    useEffect(() => {
        axios.get(`https://api-respoprovas.herokuapp.com/${type}`)
        .then(success => setList(success.data))
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[type]);
    const [list, setList] = useState([]);
    return(
        <Container>
            <h2>{type === "subject"? "Disciplinas - Ciclo Básico": "Professores"}</h2>
            <List>
                {type === "professor"? list.map((n,i) => <Professor list={n}/>): <Subject list={list}/>}
            </List>
        </Container>
    )
}