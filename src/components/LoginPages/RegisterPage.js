import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postSignUp } from "../../assets/services/requests";

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from "./StyledComponentsLogin"

import { UserContext } from '../App';

export function RegisterPage() {

    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [passwordConfirmRegister, setPasswordConfirmRegister] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);

    function handleLogin(e) {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(current => true);
        if (passwordRegister !== passwordConfirmRegister) {
            alert('As senhas devem ser iguais');
            setIsLoading(current => false);
            return;
        }
        const body = {
            email: emailRegister,
            name: nameRegister,
            password: passwordRegister
        }
        console.log(body);

        postSignUp(body).then(res => {
            setUser(current => ({
                name: res.data.name,
                token: res.data.token,
            }))
            setIsLoading(current => false);
            navigate('/home');
        }).catch(e => {
            alert('Um erro inesperado ocorreu')
            setIsLoading(current => false);
            console.log(e);
        })

        return;
    }

    return (
        <>
            <LogoWrapper marginTop='6rem'>
                <h1>MyWallet</h1>
            </LogoWrapper>

            <FormWrapper>
                <form onSubmit={handleLogin}>
                    <input type='text' placeholder="e-mail" value={emailRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setEmailRegister(e.target.value);
                        }} required
                    />

                    <input type='text' placeholder="nome" value={nameRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setNameRegister(e.target.value);
                        }} required
                    />

                    <input type='password' placeholder="senha" value={passwordRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordRegister(e.target.value);
                        }} required
                    />

                    <input type='password' placeholder="confirme a senha" value={passwordConfirmRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordConfirmRegister(e.target.value);
                        }} required
                    />

                    <SubmitButton>
                        Cadastrar
                    </SubmitButton>

                    <LinkWrapper>
                        <Link to='/'>Já tem uma conta? Faça login!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>
        </>
    )
}