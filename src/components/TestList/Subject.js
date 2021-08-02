import EachTest from "./EachTest"

export default function Subejct({tests}){
    console.log(tests)
    return(
        <>
            {tests.map((n, i) => <EachTest key={i} test={n} type={"subject"} />)}
        </>
    )
}