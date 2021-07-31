import { PersonSharp } from 'react-ionicons';
import { EachProfessor } from './TestTypesStyles';

export default function Professor({list}){
    const {name, id} = list;
    return(
        <EachProfessor>
            <PersonSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
            />
            <p>{list.name}</p>
        </EachProfessor>
    )
}