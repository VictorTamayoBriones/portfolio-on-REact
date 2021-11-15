import styled from 'styled-components';
import { theme } from '../../theme';

export const DualContainer = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 150px;
    p{
        color: #fff;        
        font-size: 40px;
        font-weight: 800;
        letter-spacing: 2px;
        line-height: 62px;
        grid-row: 1 / 3;
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
    }
`;