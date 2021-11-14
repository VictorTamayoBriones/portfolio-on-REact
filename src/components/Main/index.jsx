import styled from 'styled-components';
import { theme } from '../../theme';
import { AboutMe } from '../AboutMe';

export const Main = () => {
    return(
        <ContainerMain>
            <AboutMe/>
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    width: 100%;
    height: 1000px;
    background: ${ theme.gris };
`;