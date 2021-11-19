import { Title } from '../Title';
import { ContainerProjects } from '../Project/styled';
import { Project } from '../Project/index';
import { useEffect, useContext, useRef } from 'react';
import { ContextHeight } from '../../context/heightContext';

export const Projects = () => {

    const projectsRef = useRef(null);

    const {
        setHeightProjects
    }=useContext(ContextHeight)

    const getHight = () =>{
        const newHeight = projectsRef.current.clientHeight;
        setHeightProjects(newHeight + 50);
    }

    useEffect(()=>{
        getHight();
    });

    return(
        <>
            <Title>Projects</Title>
            <ContainerProjects ref={projectsRef} >
                <Project/>
            </ContainerProjects>
        </>
    )

}