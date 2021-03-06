import { Title } from '../Title';
import { DualContainer, Bio } from './styled';
import CV from '../../cv.pdf';
import { useEffect, useContext, useRef } from 'react';
import { ContextHeight } from '../../context/heightContext';

export const AboutMe = () => {

    const aboutRef = useRef(null);

    const{
        setHeightAbout,
    }=useContext(ContextHeight)

    const getHight = () =>{
        const newHeight = aboutRef.current.clientHeight;
        setHeightAbout(newHeight + 50);
    }

    useEffect(()=>{
        getHight();
    });

    return(
        <>
            <Title>About me</Title>
            <DualContainer ref={aboutRef} >
                <p>Hi I am a web developer with a good knowledge on front-end with React</p>

                <Bio>
                    <p>My name is Víctor Tamayo i am a web developer so in love with front-end. I started to code in 2019 with JavaScript. I usually use react for my projects.</p>
                    <a download href={CV} >Download my CV 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                        </svg>
                    </a>
                </Bio>
            </DualContainer>
        </>
    )
}