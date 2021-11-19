import styled from 'styled-components';
import { theme } from '../../theme';

export const DualContainer = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 150px;
    position: relative;
    z-index: 2;
    @media (max-width: 700px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 50px;
        text-align: center;
    }
    p{
        color: #fff;        
        font-size: 40px;
        font-weight: 800;
        letter-spacing: 2px;
        line-height: 62px;
        grid-row: 1 / 3;
        @media (max-width: 1000px){
            font-size: 30px;
            line-height: 40px;
        }
        @media (max-width: 500px){
            font-size: 20px;
            line-height: 25px;
        }
    }
`;

export const Bio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
        color: #fff;
        font-size: 22px;
        letter-spacing: 2px;
        line-height: 28px;
        font-weight: 300;
        @media (max-width: 1000px){
            font-size: 18px;
            line-height: 30px;
        }
        @media (max-width: 500px){
            font-size: 16px;
            line-height: 22px;
        }
    }
    a{
        color: ${theme.naranja};
        width: max-content;
        font-size: 20px;
        letter-spacing: 1px;
        text-decoration: none;
        border-bottom: solid 1px ${theme.naranja};
        svg{
            width: 30px;
            height: 30px;
            transform: translate(5px, 5px);
        }
        @media (max-width: 1000px){
            font-size: 18px;
        }
        @media (max-width: 700px){
            margin: auto;
        }
    }
`;