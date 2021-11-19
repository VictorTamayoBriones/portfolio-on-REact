import styled from 'styled-components';
import { Cuadro } from '../Cuadro';
import { motion } from 'framer-motion';

export const Cuadros = () => {
    return(
        <Container>
            <Cuadro as={motion.div} initial={{ y: -2000, x: 50 }} animate={{ rotate: 360, y: -3500 }} transition={{ duration: 40 }} />
            <Cuadro as={motion.div} initial={{ y: -2000, x: 500 }} animate={{ rotate: 360, y: -4200 }} transition={{ duration: 60 }} />
            <Cuadro as={motion.div} initial={{ y: -2000, x: 800 }} animate={{ rotate: 360, y: -4900 }} transition={{ duration: 80 }} />
            <Cuadro as={motion.div} initial={{ y: -2000, x: 50 }} animate={{ rotate: 360, y: -5600 }} transition={{ duration: 40, delay: 3 }} />
            <Cuadro as={motion.div} initial={{ y: -2000, x: 500 }} animate={{ rotate: 360, y: -6300 }} transition={{ duration: 60, delay: 6}} />
            <Cuadro as={motion.div} initial={{ y: -2000, x: 800 }} animate={{ rotate: 360, y: -7000 }} transition={{ duration: 80, delay:  9}} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 1500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    gap: 500px;
    flex-wrap: wrap;
`;

/*
    initial={{ y:-1500, x: 20 }} animate={{ rotate: 360, y: -3500 }} transition={{ duration: 40 }}
    initial={{ y:-800, x: 500 }} animate={{ rotate: 360, y: -4200 }} transition={{ duration: 40 }}
    initial={{ y:-100, x: 1000 }} animate={{ rotate: 360, y: -4900 }} transition={{ duration: 40 }}
*/