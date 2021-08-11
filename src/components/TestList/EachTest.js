import { DocumentTextSharp } from "react-ionicons";

export default function EachTest({ test, type }) {
  const { professor, subject } = test;
  return (
    <a href={test.url} target="_blank">
      <DocumentTextSharp
        color={"#ADBAC7"}
        height="25px"
        width="25px"
        style={{ marginRight: "10px" }}
      />
      <p>{test.name + " -"}</p>
      <p>{type === "subject" ? professor.name : subject.name}</p>
    </a>
  );
}
