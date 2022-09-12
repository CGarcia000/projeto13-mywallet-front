import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from "./StyledComponentsLogin"

import { postLogin } from "../../assets/services/requests";
import { UserContext } from '../App';

import axios from 'axios';

export function Login() {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);

    function handleLogin(e) {
        if (isLoading) return;
        e.preventDefault();
        setIsLoading(current => true);

        const body = {
            email: emailLogin,
            password: passwordLogin,
        }


        postLogin(body).then(res => {
            setUser(current => ({
                name: res.data.name,
                token: res.data.token,
            }))
            console.log(res.data.token);
            setIsLoading(current => false);
            navigate('/home');
        }).catch(e => {
            alert('Um erro inesperado ocorreu!')
            setIsLoading(current => false);
            console.log(e);
        })
    }

    return (
        <>
            <LogoWrapper marginTop='10rem'>
                <h1>MyWallet</h1>
            </LogoWrapper>

            <FormWrapper>
                <form onSubmit={handleLogin}>
                    <input type='text' placeholder="e-mail" value={emailLogin}
                        onChange={e => {
                            if (isLoading) return;
                            setEmailLogin(e.target.value);
                        }} required
                    />

                    <input type='password' placeholder="senha" value={passwordLogin}
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordLogin(e.target.value);
                        }} required
                    />

                    <SubmitButton>
                        Entrar
                    </SubmitButton>

                    <LinkWrapper>
                        <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>
        </>
    )
}