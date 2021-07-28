import { useHistory } from "react-router"
export default function Options(){
    let history = useHistory();
    return(
        <div className="options">
            <p onClick={() => history.push("/submit")}>Submeter</p>
            <p onClick={() => history.push("/teste")}>Provas</p>
            <p onClick={() => history.push("/contact")}>Contato</p>
        </div>
    )
}