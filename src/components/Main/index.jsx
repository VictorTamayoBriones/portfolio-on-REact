import styled from 'styled-components';
import { theme } from '../../theme';
import { AboutMe } from '../AboutMe';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { Projects } from '../Projects';

export const Main = () => {
    return(
        <ContainerMain>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    width: 100%;
    height: 1000px;
    background: ${ theme.gris };
`;