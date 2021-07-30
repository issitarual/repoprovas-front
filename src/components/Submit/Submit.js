import { Container } from "./SubmitStyles";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Submit(){
    useEffect(() => {
        axios.get("http://api-respoprovas.herokuapp.com/submit")
        .then(success => setSubject(success.data))
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
        axios.get("http://api-respoprovas.herokuapp.com/submit/types")
        .then(success => setTypes(success.data))
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[]);

    const [selectSubject, setSelectSubject] = useState(0);
    const [selectProfessor, setSelectProfessor] = useState(0);
    const [semester, setSemester] = useState("");
    const [selectType, setSelectType] = useState(0);
    const [pdf, setPdf] = useState("");
    const [subject, setSubject] = useState([]);
    const [professor, setProfessor] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if(selectSubject === 0) return setProfessor([]);
        const response = axios.get(`http://api-respoprovas.herokuapp.com/submit/subject/${selectSubject}`);
        response.then(success => setProfessor(success.data));
        response.catch(error => {
            alert("Algo deu errado, tente novamente!");
            console.log(error);
        });
    },[selectSubject]);

    return(
        <Container>
            <h1>Envie uma prova!</h1>
            <form onSubmit={(e) => submitTest(e)}>
                <h2>Primeiro passo: Selecione uma disciplina!</h2>
                <select 
                    id="disciplina" 
                    name="disciplina" 
                    autoFocus 
                    required 
                    value={selectSubject} 
                    onChange={(e) => setSelectSubject(e.target.value)}
                >
                    <option value={0}>Selecione</option>
                    {subject.map((n, i) => <option key={i} value={n.id}>{n.name}</option>)}
                </select>
                <h2>Segundo passo: Selecione um professor!</h2>
                <select 
                    id="professor" 
                    name="professor" 
                    autoFocus 
                    required 
                    value={selectProfessor} 
                    onChange={(e) => setSelectProfessor(e.target.value)}
                >
                    <option value={0}>Selecione</option>
                    {professor.map((n, i) => <option key={i} value={n.id}>{n.name}</option>)}
                </select>
                <h2>Terceiro passo: Qual período foi aplicada?</h2>
                <input 
                    type="text" 
                    placeholder="Ex: 2021/1"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    required
                />
                <h2>Quarto passo: Selecione o tipo de prova</h2>
                <select 
                    id="type" 
                    name="type" 
                    autoFocus 
                    required
                    value={selectType} 
                    onChange={(e) => setSelectType(e.target.value)}
                >
                    <option value="0">Selecione</option>
                    {types.map((n, i) => <option key={i} value={n.id}>{n.name}</option>)}
                </select>
                <h2>Por último: Envie a URL da prova em PDF (:</h2>
                <input 
                    type="url"
                    placeholder="https://exemplo.com"
                    pattern="https://.*"
                    required
                    value={pdf}
                    onChange={(e) => setPdf(e.target.value)}
                />
                <h2>Agora é só enviar!</h2>
                <button type="submit">{loading? <Loader type="ThreeDots" color="#9DA7B2" height={15} width={50} />: "Enviar"}</button>
            </form>
        </Container>
    )
    function submitTest(e){
        e.preventDefault();
        setLoading(true);
        if(selectSubject === 0)return alert("Selecione uma disciplina!");
        else if(selectProfessor === 0) return alert("Selecione um professor!");
        else if(selectType === 0) return alert("Selecione um tipo de prova!");
        const sendTest = {
            name: semester,
            typeId: selectType,
            subjectId: selectSubject,
            professorId: selectProfessor,
            url: pdf
        }
        axios.post("http://api-respoprovas.herokuapp.com/submit", sendTest)
        .then(success =>{
            setSelectSubject(0);
            setSelectType(0);
            setSelectProfessor(0);
            setPdf("");
            setSemester("");
            alert("enviado");
            history.push("/");
        })
        .catch(error => {
            alert("Algo deu errado, tente novamente!");
            setLoading(false);
            console.log(error);
        })
    }
}