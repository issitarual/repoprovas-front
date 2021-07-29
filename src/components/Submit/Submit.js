import { Container } from "./SubmitStyles"

export default function Submit(){
    return(
        <Container>
            <h1>Envie uma prova!</h1>
            <h2>Primeiro passo: Selecione uma disciplina!</h2>
            <h2>Segundo passo: Selecione um professor!</h2>
            <h2>Terceiro passo: Qual período foi aplicada?</h2>
            <h2>Quarto passo: Selecione o tipo de prova</h2>
            <h2>Por último: Envie a URL da prova em PDF (:</h2>
            <button>Enviar</button>
        </Container>
    )
}