import { BookSharp } from 'react-ionicons';
import { EachProfessor } from './TestTypesStyles';

export default function EachSubject({subject}){
    return(
        <EachProfessor className="subject">
            <BookSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{margin: 'auto', width: '100%'}}
            />
            <p>{subject.subject.name}</p>
        </EachProfessor>
    )
}