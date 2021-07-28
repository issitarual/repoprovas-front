import styled from "styled-components";

const Container = styled.main`
    margin-top: 70px;
    padding-right: 10%;
    padding-left: 10%;
    h2{
        color: #ADBAC7;
        font-family: 'Roboto',sans-serif;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const Subject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #373E47;
    border-radius: 5px;
    padding: 8px;
    width: 150px;
    p{
        color: #b2b6b8;
        font-family: 'Roboto',sans-serif;
        font-size: 15px;
        margin-top: 10px;
    }
`
export { Container, Subject };