import { Types } from "./HomeStyles";
import { useHistory } from 'react-router';

export default function Title({type}){
    let history = useHistory();
    return(
        <Types>
            <h2>{type === "subject"? "Matérias": "Professores"}</h2>
            <button onClick={() => history.push(`/test/${type}`)}>
                Ver mais +
            </button>
        </Types>
    )
}