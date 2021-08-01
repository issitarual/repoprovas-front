import { BookSharp } from 'react-ionicons';
import { EachProfessor } from './TestTypesStyles';
import { useHistory } from 'react-router';

export default function EachSubject({subject}){
    const {name, id} = subject;
    let history = useHistory();
    return(
        <EachProfessor className="subject" onClick={() => goToSubjectTest(id)}>
            <BookSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{margin: 'auto', width: '100%'}}
            />
            <p>{name}</p>
        </EachProfessor>
    )
    function goToSubjectTest(id){
        history.push(`/test/subject/${id}`)
    }
}