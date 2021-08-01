import { Semester, List } from "./TestTypesStyles";
import EachSubject from "./EachSubject";

export default function Subject({list}){
    return(
        <Semester>
            <h3>1º Semestre</h3>
                <span>
                    {list.filter(n => n.semester === 1).map((n, i) => <EachSubject subject={n.subject} key={i}/>)}
                </span>
            <h3>2º Semestre</h3>
                <span>
                    {list.filter(n => n.semester === 2).map((n, i) => <EachSubject subject={n.subject} key={i}/>)}
                </span>
            <h3>3º Semestre</h3>
                <span>
                    {list.filter(n => n.semester === 3).map((n, i) => <EachSubject subject={n.subject} key={i}/>)}
                </span>
            <h3>4º Semestre</h3>
                <span>
                    {list.filter(n => n.semester === 4).map((n, i) => <EachSubject subject={n.subject} key={i}/>)}
                </span>
        </Semester>
    )
}