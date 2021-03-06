import styled from 'styled-components';
import { theme } from '../../theme';


const ContainerMenu = styled.div`
    width: ${props => props.open ? '30%' : '0px'};
    padding: ${props => props.open ? '20px' : '0'};
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    transition: all ease .5s;
    svg{
        color: #fff;
        width: ${props => props.open ? '30px' : '0'};
        &:hover{
            cursor: pointer;
        }
    }
    @media (max-width: 1000px){
        width: ${props => props.open ? '50%' : '0px'};
    }
    @media (max-width: 600px){
        width: ${props => props.open ? '100%' : '0px'};
        background: rgba(0, 0, 0, 0.9);
    }
`;

const List = styled.ul`
    width: 100%;
    margin-top: 50px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const ListItem = styled.li`
    color: #fff;
    font-weight: 800;
    font-size: 50px;
    letter-spacing: 3px;
    border-bottom: solid 2px transparent; ;
    &:hover{
        border-bottom: solid 2px ${ theme.naranja };
        cursor: pointer;
    }
    @media (max-width: 600px){
        font-size: 30px;
    }
`;

export { ContainerMenu, List, ListItem }