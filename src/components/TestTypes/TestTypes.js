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
        .then(success => {
            if(type === "subject") return setList(success.data);
            let object = {};
            let removeDuplicate = [];
            for (let i = 0; i < success.data.length; i++) {
              let item = success.data[i];
              if (!object[item.name]) {
                object[item.name] = true;
                removeDuplicate.push(item);
              }
            }
            setList(removeDuplicate);
        })
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[type]);
    const [list, setList] = useState([]);
    console.log(list);
    return(
        <Container>
            <h2>{type === "subject"? "Disciplinas": "Professores"}</h2>
            <List>
                {type === "professor"? list.map((n,i) => <Professor list={n}/>): <Subject list={list}/>}
            </List>
        </Container>
    )
}