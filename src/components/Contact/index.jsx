import { Title } from '../Title'
import { Form } from './form'
import { ContainerDual } from './styled'

export const Contact = () => {
    return (
        <>
            <Title>Contact</Title>
            <ContainerDual>
                <p>Send me a message</p>
                <Form/>
            </ContainerDual>
        </>
    )
}