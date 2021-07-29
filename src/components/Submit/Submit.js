import { Container } from "./SubmitStyles";
import { useState } from "react";
import { useHistory } from "react-router";

export default function Submit(){
    const [semester, setSemester] = useState("");
    let history = useHistory();
    return(
        <Container>
            <h1>Envie uma prova!</h1>
            <form onSubmit={(e) => submitTest(e)}>
                <h2>Primeiro passo: Selecione uma disciplina!</h2>
                <select id="disciplina" name="disciplina" autoFocus required>
                    <option value="1">Matéria 1</option>
                    <option value="2">Matéria 2</option>
                </select>
                <h2>Segundo passo: Selecione um professor!</h2>
                <select id="professor" name="professor" autoFocus required>
                    <option value="1">Professor 1</option>
                    <option value="2">Professor 2</option>
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
                <select id="type" name="type" autoFocus required>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P2">2CH</option>
                    <option value="P2">Outras</option>
                </select>
                <h2>Por último: Envie a URL da prova em PDF (:</h2>
                <input 
                    type="url"
                    placeholder="https://exemplo.com"
                    pattern="https://.*"
                    required
                />
                <h2>Agora é só enviar!</h2>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
    function submitTest(e){
        e.preventDefault();
        alert("enviado");
        history.push("/");
    }
}