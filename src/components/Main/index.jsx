import styled from 'styled-components';
import { theme } from '../../theme';
import { AboutMe } from '../AboutMe';
import { Contact } from '../Contact';
import { Cuadros } from '../Cuadros';
import { Footer } from '../Footer';
import { Projects } from '../Projects';

export const Main = () => {
    return(
        <>
        <ContainerMain>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Cuadros/>
            <Footer/>
        </ContainerMain>
        </>
    )
}

const ContainerMain = styled.div`
    width: 100%;
    background: ${ theme.gris };
    position: relative;
    overflow: hidden;
`;