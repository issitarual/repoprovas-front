import styled from "styled-components";

const Container = styled.main`
  margin-top: 80px;
  padding-right: 10%;
  padding-left: 10%;
  h2 {
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: bold;
  }
  button {
    background-color: #373e47;
    border: 1px solid #768390;
    border-radius: 20px;
    padding: 8px;
    padding-left: 30px;
    padding-right: 30px;
    color: #b2b6b8;
    cursor: pointer;
  }
`;

const Types = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Subject = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #373e47;
  border-radius: 5px;
  padding: 8px;
  width: calc(25% - 10px);
  margin-bottom: 10px;
  @media (max-width: 600px) {
    width: calc(50% - 10px);
  }
  p {
    color: #b2b6b8;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    margin-top: 10px;
    text-align: center;
  }
`;
export { Container, Subject, Types, List };
