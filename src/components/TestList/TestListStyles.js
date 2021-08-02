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
    h3{
        color: #ADBAC7;
        font-family: 'Roboto',sans-serif;
        font-size: 18px;
        margin-top: 10px;
        @media(max-width: 600px){
            text-align: center;
        } 
    }
    h6{
        color: #ADBAC7;
        font-family: 'Roboto',sans-serif;
        font-size: 15px;
        margin-top: 10px;
        @media(max-width: 600px){
            text-align: center;
        }
    }
    h6:hover{
        color: #A1AD9F;
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid #373E47;
        border-radius: 5px;
        padding: 8px;
        margin-top: 10px;
    }
    p{
        margin-right: 5px;
        color: #ADBAC7;
        font-family: 'Roboto',sans-serif;
        font-size: 16px;
    }
`;

export { Container };