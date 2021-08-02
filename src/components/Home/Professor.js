import { Subject } from "./HomeStyles";
import { PersonSharp } from 'react-ionicons';
import { useHistory } from "react-router";

export default function Professor({name, id, tests}){
    let history = useHistory();
    return(
        <Subject onClick={() => goToProfessorTest(id, name)}>
            <PersonSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
            />
            <p>{`${name} (${tests.length})`}</p>
        </Subject>
    )
    function goToProfessorTest(id, name){
        history.push(`/test/professor/${id}/${name}`)
    }
}