import EachTest from "./EachTest";

export default function Professor({tests}){
    return(
        <>
            {tests.map((n, i) => <EachTest key={i} test={n} type={"professor"}/>)}
        </>
    )
}