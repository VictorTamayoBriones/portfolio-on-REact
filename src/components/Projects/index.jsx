import { Title } from '../Title';
import { ContainerProjects } from '../Project/styled';
import { Project } from '../Project/index';

export const Projects = () => {

    return(
        <>
            <Title>Projects</Title>
            <ContainerProjects>
                <Project/>
            </ContainerProjects>
        </>
    )

}