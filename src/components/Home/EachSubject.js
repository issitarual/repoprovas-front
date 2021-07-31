import { CalculatorSharp, RocketSharp, CellularSharp, DesktopSharp, CubeSharp } from 'react-ionicons'
import { Subject } from "./HomeStyles";

export default function EachSubject({name, id}){
    return(
        <Subject>
            <CalculatorSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{display: `${name.includes("Cálculo")? "block": "none"}`}}
            />
            <RocketSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{display: `${name.includes("física")? "block": "none"}`}}
            />
            <CellularSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{display: `${name.includes("PROBEST")? "block": "none"}`}}
            />
            <DesktopSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{display: `${name.includes("Computação")? "block": "none"}`}}
            />
            <CubeSharp
                color={'#b2b6b8'} 
                height="25px"
                width="25px"
                style={{display: `${name.includes("Álgebra")? "block": "none"}`}}
            />
            <p>{name}</p>
        </Subject>
    )
}