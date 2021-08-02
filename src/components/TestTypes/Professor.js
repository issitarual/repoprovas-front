import { PersonSharp } from 'react-ionicons';
import { EachProfessor } from './TestTypesStyles';
import { useHistory } from 'react-router';

export default function Professor({list}){
    let history = useHistory();
    const {name, id} = list;
    return(
        <EachProfessor onClick={() => goToProfessorTeste(id, name)}>
            <PersonSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
            />
            <p>{name}</p>
        </EachProfessor>
    )
    function goToProfessorTeste(id, name){
        history.push(`/test/professor/${id}/${name}`)
    }
}