import { Container, List } from "./TestTypesStyles";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Professor from "./Professor";
import Subject from "./Subject";
import Loader from "react-loader-spinner";

export default function TestTypes() {
  let { type } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/${type}`)
      .then((success) => {
        setList(success.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente!");
        console.log(error);
      });
  }, [type]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(list);
  return (
    <Container>
      <h2>
        {type === "subject" ? "Disciplinas - Ciclo Básico" : "Professores"}
      </h2>
      <List>
        {type === "professor" ? (
          list.map((n, i) => <Professor list={n} />)
        ) : (
          <Subject list={list} />
        )}
        <Loader
          type="TailSpin"
          color="#ADBAC7"
          height={80}
          width={80}
          style={{ margin: "auto", display: `${loading ? "block" : "none"}` }}
        />
      </List>
    </Container>
  );
}
