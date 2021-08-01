import { Subject } from "./HomeStyles";
import { PersonSharp } from 'react-ionicons';
import { useHistory } from "react-router";

export default function Professor({name, id}){
    let history = useHistory();
    return(
        <Subject onClick={() => goToProfessorTest(id)}>
            <PersonSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
            />
            <p>{name}</p>
        </Subject>
    )
    function goToProfessorTest(id){
        history.push(`/test/professor/${id}`)
    }
}