import { Container } from "./ConstactStyles";
import { useState } from "react";
import { useHistory } from "react-router";

export default function Contact(){
    const options = [
        'Selecione', 
        'Dúvida', 
        'Sugestão', 
        'Reportar erro', 
        'Denúncia', 
        'Outros'
    ];
    let history = useHistory();
    return(
        <Container>
            <h1>Entre em contato conosco!</h1>
            <form onSubmit={(e) => submitTest(e)}>
                <h2>Selecione o assunto!</h2>
                <select id="assunto" name="assunto" autoFocus required>
                    {options.map((n, i)=> <option value={n}>{n}</option>)}
                </select>
                <h2>Mande sua mensagem!</h2>
                <textarea type="text" required />
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