import { Container, List } from "./HomeStyles";
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import EachSubject from "./EachSubject";
import Title from "./Title";
import Loader from "react-loader-spinner";

export default function Home(){
    useEffect(() => {
        axios.get("https://api-respoprovas.herokuapp.com/submit")
        .then(success => {
            setSubject(success.data.splice(0,12));
            setLoadingSubject(false);
        })
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
        axios.get("https://api-respoprovas.herokuapp.com/professor")
        .then(success => {
            setProfessor(success.data.slice(0, 8));
            setLoadingProfessor(false);
        })
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[]);
    const [professor, setProfessor] = useState([]);
    const [subject, setSubject] = useState([]);
    const [loadingProfessor, setLoadingProfessor] = useState(true);
    const [loadingSubject, setLoadingSubject] = useState(true)

    return(
        <Container>
            <Title type={"subject"}/>
            <List>
                {subject.map((n, i) => <EachSubject key={i} id={n.id} name={n.name}/>)}
                <Loader 
                    type="TailSpin" 
                    color="#ADBAC7" 
                    height={80} 
                    width={80} 
                    style={{margin: 'auto', display: `${loadingSubject? 'block': 'none'}`}}
                />
            </List>
            <Title type={"professor"}/>
            <List>
                <Loader 
                    type="TailSpin" 
                    color="#ADBAC7" 
                    height={80} 
                    width={80} 
                    style={{margin: 'auto', display: `${loadingProfessor? 'block': 'none'}`}}
                />                
                {professor.map((n, i) => <Professor key={i} id={n.id} name={n.name}/>)}
            </List>
        </Container>
    )
}

