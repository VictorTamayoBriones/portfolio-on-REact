import { ContainerMenu, List, ListItem } from './styled';
import { useContext } from 'react';
import { ContextHeight } from '../../context/heightContext';

export const Menu = ({ onChangeMenu, open }) => {

    const{
        heightHero,
        heightAbout,
        heightProjects
    }=useContext(ContextHeight)

    // const seeMore = ()=> window.scrollTo(0, height);

    const goTo = (e) =>{
        const sec = e.target.attributes[0].value;
        if( sec === 'about' ){
            return window.scrollTo(0, heightHero);
        }else if ( sec === 'project' ){
            return window.scrollTo(0, heightHero + heightAbout + 200);
        }else if ( sec === 'contact' ){
            return window.scrollTo(0, heightHero + heightAbout + 300 + heightProjects);
        }
    }

    return(
        <ContainerMenu open={open} >
            <svg onClick={()=>{ onChangeMenu() }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill="currentColor" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill="currentColor" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg>
            <List>
                <ListItem name='about' onClick={goTo} >About Me</ListItem>
                <ListItem name='project' onClick={goTo} >Projects</ListItem>
                <ListItem name='contact' onClick={goTo} >Contact</ListItem>
            </List>
        </ContainerMenu>
    )
}