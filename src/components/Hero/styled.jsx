import styled from 'styled-components';
import Me from '../../images/headerWeb.png';

const ContainerHero = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Me});
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0px 20px 80px;
    position: relative;
    z-index: 3;
    @media (max-width: 550px){
        padding: 20px 0px 20px 20px;
    }
`;

const ContainerText = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1120px){
        width: 70%;
    }
    @media (max-width: 550px){
        width: 100%;
    }
    @media (max-width: 550px){
        transform: translate(0px, 70px);
    }
`;

const ContainerSocial = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    svg{
        position: relative;
        color: #fff;
        width: 40px;
        &:hover{
            cursor: pointer;
        }
    }
`;

const Text = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 40px;
    letter-spacing: 3px;
    line-height: 70px;
    @media (max-width: 1120px){
        font-size: 30px;
    }
    @media (max-width: 550px){
        font-size: 25px;
        line-height: 50px;
        letter-spacing: 2px;
    }
`;

const Cargo = styled.h2`
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 60px;
    letter-spacing: 5px;
    transform: translateY(80px);
    @media (max-width: 1120px){
        font-size: 40px;
    }
    @media (max-width: 550px){
        font-size: 30px;
        letter-spacing: 3px;
    }
`;

export { ContainerHero, ContainerText, ContainerSocial, Text, Cargo }