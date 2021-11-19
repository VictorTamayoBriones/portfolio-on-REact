import React, {useState} from 'react'

const ContextHeight = React.createContext();

const ProviderHeigth = ({children}) => {

    const [heightHero, setHeightHero]=useState(null);
    const [heightAbout, setHeightAbout]=useState(null);
    const [heightProjects, setHeightProjects]=useState(null);

    return(
        <ContextHeight.Provider value={{ 
            heightHero: heightHero,
            setHeightHero: setHeightHero,
            heightAbout: heightAbout,
            setHeightAbout: setHeightAbout,
            heightProjects: heightProjects,
            setHeightProjects: setHeightProjects
        }}>
            {children}
        </ContextHeight.Provider>
    )

}

export { ContextHeight, ProviderHeigth }