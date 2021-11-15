import styled from 'styled-components';
import { theme } from '../../theme';

export const ContainerProjects = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
`;

export const CardProject = styled.div`
    height: max-content;
    padding-bottom: 20px;
    overflow: hidden;
    img{
        width: 100%;
    }
`;

export const CardTitle = styled.h3`
    color: #fff;
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 28px;
    letter-spacing: 2px;
    text-align: center;
`;

export const ContainerBtns = styled.div`
    width: 100%;
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 12px;
    button, a{
        text-decoration: none;
        background: ${theme.naranja};
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
        transition: all ease .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        svg{
            width: 25px;
            height: 25px;
        }
        &:hover{
            cursor: pointer;
            box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.5);
            background: #fff;
            color: ${theme.naranja};
        }
    }
    .web{
        grid-column: 1 / -1;
    }
`;