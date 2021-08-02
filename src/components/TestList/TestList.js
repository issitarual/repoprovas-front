import { Container } from "./TestListStyles";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import Subejct from "./Subject";
import { Link } from "react-router-dom";

export default function TestList(){
    let { type, id, name } = useParams();
    useEffect(() => {
        const data = {
            name: name
        }
        axios.get(`https://api-respoprovas.herokuapp.com/${type}/${id}/`, data)
        .then(success => setTests(success.data))
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[type]);
    const [tests, setTests] = useState([]);

    return(
        <Container>
            <h2>{name[0].toUpperCase() + name.substr(1)}</h2>
            {
                tests.length === 0?
                <h6><Link to="/submit">Ainda não temos provas cadastradas, envie uma!</Link></h6>:
                type === "subject"? 
                <Subejct tests={tests} />: 
                <Professor testes={tests}/>
            }
        </Container>
    )
}