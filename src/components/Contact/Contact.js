import { Container } from "./ConstactStyles";
import { useState } from "react";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";

export default function Contact() {
  const options = [
    "Selecione",
    "Dúvida",
    "Sugestão",
    "Reportar erro",
    "Denúncia",
    "Outros",
  ];
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  return (
    <Container>
      <h1>Entre em contato conosco!</h1>
      <form onSubmit={(e) => submitTest(e)}>
        <h2>Selecione o assunto!</h2>
        <select id="assunto" name="assunto" autoFocus required>
          {options.map((n, i) => (
            <option value={n}>{n}</option>
          ))}
        </select>
        <h2>Mande sua mensagem!</h2>
        <textarea type="text" required />
        <h2>Agora é só enviar!</h2>
        <button type="submit">
          {loading ? (
            <Loader type="ThreeDots" color="#9DA7B2" height={15} width={50} />
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </Container>
  );
  function submitTest(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("enviado");
      history.push("/");
    }, 1000);
  }
}
