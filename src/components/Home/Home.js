import { Container, List } from "./HomeStyles";
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import EachSubject from "./EachSubject";
import Title from "./Title";

export default function Home(){
    useEffect(() => {
        axios.get("https://api-respoprovas.herokuapp.com/submit")
        .then(success => setSubject(success.data.splice(0,12)))
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
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
    const [subject, setSubject] = useState([]);

    return(
        <Container>
            <Title type={"subject"}/>
            <List>
                {subject.map((n, i) => <EachSubject key={i} id={n.id} name={n.name}/>)}
            </List>
            <Title type={"professor"}/>
            <List>
                {professor.map((n, i) => <Professor key={i} id={n.id} name={n.name}/>)}
            </List>
        </Container>
    )
}

