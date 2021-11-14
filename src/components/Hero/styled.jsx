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
`;

const ContainerText = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
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
`;

const Cargo = styled.h2`
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 60px;
    letter-spacing: 5px;
    transform: translateY(80px);
`;

export { ContainerHero, ContainerText, ContainerSocial, Text, Cargo }