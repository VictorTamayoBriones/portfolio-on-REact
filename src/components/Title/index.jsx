import styled from 'styled-components';
import { theme } from '../../theme';

export const Title = styled.h2`
    width: max-content;
    margin: 50px auto 100px auto;
    letter-spacing: 3px;
    border-bottom: solid 1px ${theme.naranja};
    text-align: center;
    font-size: 50px;
    font-weight: 800;
    color: #fff;
    position: relative;
    z-index: 2;
    @media (max-width: 500px){
        font-size: 40px;
        margin: 50px auto 50px auto;
    }
`;