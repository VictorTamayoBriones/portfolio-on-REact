import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Form = () => {

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[message, setMessage]=useState('');

    const handleChange = ({target:{name, value}}) => name === 'name' ? setName(value) : setEmail(value);

    const handleChangeMesssage = (e) => setMessage(e.target.value);

    return(
        <FormContact>
            <input type="text" placeholder="Name" name='name' value={name} onChange={handleChange} />
            <input type="mail" placeholder="E-mail" name='email' value={email} onChange={handleChange} />
            <textarea placeholder="Message..." name='message' value={message} onChange={handleChangeMesssage}/>
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
        @media (max-width: 500px){
            font-size: 18px;
        }
    }
    textarea{
        min-width: 100%;
        max-width: 200px;
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
        transition: all ease .5s;
        cursor: pointer;
        &:hover{
            background: #fff;
            color: ${theme.naranja};
        }
    }
`;