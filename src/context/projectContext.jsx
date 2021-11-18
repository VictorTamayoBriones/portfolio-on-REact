import React, {useState} from 'react'

const ContextProjects = React.createContext();

const ProviderProjects = ({children}) => {

    const[modal, setModal]=useState({
        estado: false,
        project: null,
        name: '',
        describe: '',
        img: null
    });

    const onModal = (id, desc, name, img) => {
        setModal({
            estado: true,
            project: id,
            name: name,
            describe: desc,
            img: img
        })
    }

    const closeModal = () => {
        setModal({
            estado: false,
            project: null,
            name: '',
            describe: '',
            img: null
        })
    }

    return(
        <ContextProjects.Provider value={{ modal: modal, onModal: onModal, closeModal: closeModal }} >
            {children}
        </ContextProjects.Provider>
    )

}

export { ContextProjects, ProviderProjects } 