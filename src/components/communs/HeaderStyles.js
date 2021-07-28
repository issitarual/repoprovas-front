import styled from "styled-components";

const Container = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #2D333B;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
    }
    .options{
        width: 100%;
    }
    h1{
        margin-left: 10px;
        color: #A1AD9F;
        font-family: 'Lobster', cursive;
        font-size: 25px;
        cursor: pointer;
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
    }
    p{
        margin: auto;
        color: #A1AD9F;
        font-family: 'Roboto', sans-serif;  
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
        @media(max-width: 600px)   {
            display: none;
        }
    }
    h1:hover{
        color: #8CA5AF;
    }
    p:hover{
        color: #8CA5AF;
    }
`

export { Container };