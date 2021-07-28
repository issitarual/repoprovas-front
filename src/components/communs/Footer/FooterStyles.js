import styled from "styled-components";

const Container = styled.footer`
    margin-right: 10%;
    margin-left: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    border-top: 1px solid #373E47;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
`;

const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    p{
        margin: auto;
        color: #A1AD9F;
        font-family: 'Roboto', sans-serif;  
        font-size: 13px;
        letter-spacing: 1px;
        cursor: pointer;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
    p{
        margin: auto;
        color: #A1AD9F;
        font-family: 'Lobster', cursive;
        font-size: 15px;
        letter-spacing: 1px;
        cursor: pointer;
        margin-left: 10px;
    }
`;

export { Container, SocialMediaContainer, LogoContainer, OptionsContainer };