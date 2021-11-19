import styled from 'styled-components';

export const BtnMenu = ({ onChangeMenu, open })=>{
    return(
        <Btn onClick={()=>{onChangeMenu()}} open={open} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </Btn>
    )
}

const Btn = styled.svg`
    color: #fff;
    width: ${props => props.open ? '0px' : '45px' };
    position: absolute;
    right: 50px;
    top: 20px;
    transition: all ease 0.5s;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 500px){
        right: 20px;
    }
`;