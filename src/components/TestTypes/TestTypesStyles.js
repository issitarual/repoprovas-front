import styled from "styled-components";

const Container = styled.main`
    margin: auto;
    margin-top: 80px;
    width: 80%;
    border: 1px solid #373E47;
    border-radius: 5px;
    padding: 10px;
    h2{
        color: #ADBAC7;
        font-family: 'Roboto',sans-serif;
        font-size: 25px;
        font-weight: bold;
        @media(max-width: 600px){
            text-align: center;
        }
    }
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

const EachProfessor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #373E47;
    border-radius: 5px;
    padding: 8px;
    width: calc(25% - 10px);
    margin-bottom: 10px;
    cursor: pointer;
    @media(max-width: 600px){
        width: calc(50% - 10px);
    }
    p{
        color: #b2b6b8;
        font-family: 'Roboto',sans-serif;
        font-size: 15px;
        margin-top: 10px;
        text-align: center;
    }
`;

const Semester = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    h3{
        color: #ADBAC7;
        font-family: 'Roboto',sans-serif;
        font-size: 15px;
        width: 100%;
        font-weight: bold;
        padding-left: 15px;
        @media(max-width: 600px){
            text-align: center;
        }
    }
    span{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0;
        @media(max-width: 600px){
            justify-content: space-between;
        }
    }
    .subject{
        margin: 10px;
        @media(max-width: 600px){
            margin: 0;
        }
    }
`;

export { Container, List, EachProfessor, Semester };