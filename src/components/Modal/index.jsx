import { ContainerModal } from "./styled"
import { useContext } from "react"
import { ContextProjects } from '../../context/projectContext';
import { motion } from "framer-motion";

export const Modal = () => {

    const {
        modal,
        closeModal
    }=useContext(ContextProjects);

    return(
        <ContainerModal as={motion.div}   initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }} >
            <h2>{modal.name}</h2>
            <p>{modal.describe}</p>
            <img src={ modal.img } alt={ modal.name } />
            <button onClick={closeModal} >X</button>
        </ContainerModal>
    )
}