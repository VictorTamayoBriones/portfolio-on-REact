import styled from 'styled-components';

export const ContainerDual = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 2;
    p{
        color: #fff;
        font-weight: 800;
        letter-spacing: 2px;
        font-size: 60px;
    }
    @media (max-width: 900px){
        grid-template-columns: 1fr;
        gap: 50px;
        p{
            text-align: center;
            font-size: 38px;
        }
    }
    @media (max-width: 500px){
        p{
            font-size: 30px;
            letter-spacing: 1px;
        }
    }
    @media (max-width: 400px){
        p{
            font-size: 25px;
            letter-spacing: 1px;
        }
    }
`;