import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 80%;
  border: 1px solid #373e47;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  h1 {
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2 {
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    margin: 10px;
  }
  select,
  input,
  textarea {
    background-color: #22272e;
    padding: 5px;
    width: 200px;
    border-radius: 5px;
    color: #9da7b2;
    margin-left: 10px;
    border: 1px solid #373e47;
    ::-webkit-input-placeholder {
      color: #9da7b2;
    }
    @media (max-width: 600px) {
      width: calc(100% - 10px);
    }
  }
  textarea {
    height: 100px;
  }
  button {
    background-color: #373e47;
    border: 1px solid #9da7b2;
    color: #9da7b2;
    border-radius: 5px;
    padding: 5px;
    width: 200px;
    margin-left: 10px;
    @media (max-width: 600px) {
      width: calc(100% - 10px);
    }
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export { Container };
