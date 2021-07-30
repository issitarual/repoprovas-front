import { Subject } from "./HomeStyles";
import { PersonSharp } from 'react-ionicons'

export default function Professor({name, id}){
    return(
        <Subject>
            <PersonSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
            />
            <p>{name}</p>
        </Subject>
    )
}