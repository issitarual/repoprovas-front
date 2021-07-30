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
    .user{
        position: relative;
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
`;

const Menu = styled.div`
    position: absolute;
    background-color: #2D333B;
    display: ${props => props.open? 'block':'none'} !important;
    top: 60px;
    right: 0;
    padding: 10px;
    display: flex;
    flex-direction: column!important;
    width: 100px;
    border-bottom-left-radius: 8px;
    z-index: 10!important;
    p{
        font-weight: normal;
        text-align: center;
        display: block;
        line-height: 30px;
    }
    .mobile{
        display: block;
        @media(min-width: 600px){
            display: none;
        }
    }
`

const CloseMenu = styled.div`
    display: ${props => props.open? 'block':'none'} !important;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`;

const SelectTest = styled.div`
    display: ${props => props.open? 'block':'none'} !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(255, 255, 255, 0.2);
    div{
        background-color: #22272E;
        margin: auto;
        width: 50%;
        margin-top: calc(50vh - 75px);
        padding: 20px;
        border-radius: 5px;
        flex-direction: column;
        border: 1px solid #8CA5AF;
        @media(max-width: 600px){
            width: 90%;
        }
    }
    p{
        @media(max-width: 600px){
            display: block;
        }
    }
    span{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 60%;
        @media(max-width: 600px){
            width: 90%;
        }
    }
    button{
        background-color: #373E47;
        border: 1px solid #9DA7B2;
        color:#9DA7B2; 
        border-radius: 5px;
        padding: 5px;
        width: 150px;
        font-weight: bold;
    }
`;

export { Container, Menu, CloseMenu, SelectTest };