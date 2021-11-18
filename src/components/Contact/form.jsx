import styled from 'styled-components';
import { theme } from '../../theme';

export const Form = () => {
    return(
        <FormContact>
            <input type="text" placeholder="Name" />
            <input type="mail" placeholder="E-mail" />
            <textarea placeholder="Message..." />
            <button>Send message</button>
        </FormContact>
    )
}

const FormContact = styled.form`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    input{
        width: 100%;
        border: none;
        border-bottom: solid 1px ${theme.naranja};
        background: none;
        color: #fff;
        font-size: 20px;
        letter-spacing: 1px;
        outline: none;
    }
    textarea{
        min-width: 100%;
        max-width: 100%;
        min-height: 150px;
        max-height: 200px;
        letter-spacing: 1px;
        background: none;
        border: solid 1px ${theme.naranja};
        border-radius: 5px;
        padding: 5px;
        color: #fff;
        outline: none;

    }
    button{
        width: 100%;
        background: ${theme.naranja};
        color: #fff;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        padding: 8px;
        letter-spacing: 1px;
    }
`;