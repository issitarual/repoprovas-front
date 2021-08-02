import Professor from "./Professor";

export default function EachTest({test, type}){
    const { professor, subject } = test;
    return(
        <a href={test.url} target="_blank">
            <p>{test.name}</p>
            <p>{type === "subject"? professor.name: subject.name}</p>
        </a>
    )
}