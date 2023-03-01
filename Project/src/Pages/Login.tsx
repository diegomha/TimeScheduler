import styles from './Login.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

export function Login() {

    interface User {
        Mail: string;
        Password: string;
    };
    const [user, setGetUser] = useState<User[]>([]);
    
    function getUser()
    {
        const user : User = {
            Mail: 'diego.miguel2504@gmail.com',
            Password: '123456'
        };

        return user;
    }
    
    function handleUserValidate(event: React.FormEvent<HTMLFormElement>) {

        const user: User = getUser();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            if (user.Mail == mailText && user.Password == passwordText)
            {
                alert('Sucesso!');
            }
            else
            {
                alert('Usuário inválido');
            }
        }

        event.preventDefault();
        event.stopPropagation();
    }

    const [mailText, setMailText] = useState('');
    function handleSetMail(event: React.ChangeEvent<HTMLInputElement>)
    {
        event.target.setCustomValidity('');
        setMailText(event.target.value);
    }

    const [passwordText, setPasswordText] = useState('');
    function handleSetPassword(event: React.ChangeEvent<HTMLInputElement>)
    {
        event.target.setCustomValidity('');
        setPasswordText(event.target.value);
    }
    
    return (
        <div className={styles.login}>
            <Container className='p-3'>
                <Form onSubmit={event => handleUserValidate(event)}>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            value={mailText} 
                            onChange={handleSetMail}
                            required 
                            type="email" 
                            placeholder="Entre com seu email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            value={passwordText} 
                            onChange={handleSetPassword}                         
                            required 
                            type="password" 
                            placeholder="Senha" />
                    </Form.Group>

                    <Button 
                        className={styles.buttonSubmit} 
                        variant="primary" 
                        type="submit">Entrar</Button>
                </Form>
            </Container>
        </div>
    );
}