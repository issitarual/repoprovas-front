import { useHistory } from "react-router";
import { SelectTest } from "./HeaderStyles";
import { useState } from "react";

export default function Options(){
    let history = useHistory();
    const [select, setSelect] = useState(false);
    return(
        <>
            <div className="options">
                <p onClick={() => history.push("/submit")}>Submeter</p>
                <p onClick={() => setSelect(true)}>Provas</p>
                <p onClick={() => history.push("/contact")}>Contato</p>
            </div>
            <SelectTest open={select} onClick={(e) => setSelect(false)}>
                <div>
                    <p>Ordenar por:</p>
                    <span>
                        <button onClick={(e) => goToTest(e, "subject")}>Disciplina</button>
                        <button onClick={(e) => goToTest(e, "professor")}>Professor</button>
                    </span>
                </div>
            </SelectTest>
        </>
    )
    function goToTest(e, type){
        e.stopPropagation();
        setSelect(false)
        history.push(`/test/${type}`)
    }
}