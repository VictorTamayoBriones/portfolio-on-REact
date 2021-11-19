import styled from 'styled-components';

export const ContainerModal = styled.div`
    width: 120%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: max-content;
    color: #fff;
    padding: 20px;
    position: absolute;
    top: 0;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.95);
    z-index: 3;
    button{
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 20px;
    }
    img{
        width: 100%;
    }
    @media (max-width: 700px){
        width: 100%;
    }
`;