import { Container } from "./TestListStyles";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import Subejct from "./Subject";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function TestList(){
    let { type, id, name } = useParams();
    useEffect(() => {
        axios.get(`https://api-respoprovas.herokuapp.com/${type}/${id}/`)
        .then(success => {
            setTests(success.data);
            setLoading(false);
        })
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[type]);
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);

    return(
        <Container>
            <h2>{name[0].toUpperCase() + name.substr(1)}</h2>
            <Loader 
                type="TailSpin" 
                color="#ADBAC7" 
                height={80} 
                width={80} 
                style={{margin: 'auto', display: `${loading? 'block': 'none'}`}}
            />
            {
                loading? 
                null:
                tests.length === 0?
                <h6><Link to="/submit">Ainda não temos provas cadastradas, envie uma!</Link></h6>:
                type === "subject"? 
                <Subejct tests={tests} />: 
                <Professor tests={tests}/>
            }
        </Container>
    )
}