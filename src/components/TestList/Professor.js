import EachTest from "./EachTest";

export default function Professor({tests}){
    return(
        <>
            {tests.filter(n => n.type.name === "P1")[0]? <h3>Prova 01</h3>: null}
            {tests.filter(n => n.type.name === "P1").map((n, i) => <EachTest key={i} test={n} type={"professor"}/>)}
            {tests.filter(n => n.type.name === "P2")[0]? <h3>Prova 02</h3>: null}
            {tests.filter(n => n.type.name === "P2").map((n, i) => <EachTest key={i} test={n} type={"professor"}/>)}
            {tests.filter(n => n.type.name === "2CH")[0]? <h3>2ª Chamada</h3>: null}
            {tests.filter(n => n.type.name === "2CH").map((n, i) => <EachTest key={i} test={n} type={"professor"}/>)}
            {tests.filter(n => n.type.name === "PF")[0]? <h3>Prova Final</h3>: null}
            {tests.filter(n => n.type.name === "PF").map((n, i) => <EachTest key={i} test={n} type={"professor"}/>)}
            {tests.filter(n => n.type.name === "Outros")[0]? <h3>Outros</h3>: null}
            {tests.filter(n => n.type.name === "Outros").map((n, i) => <EachTest key={i} test={n} type={"professor"}/>)}
        </>
    )
}