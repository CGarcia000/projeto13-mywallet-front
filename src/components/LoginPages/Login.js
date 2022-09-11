import { useState } from "react";
import { Link } from "react-router-dom";


import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from "./StyledComponentsLogin"

export function Login() {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
            <LogoWrapper marginTop='10rem'>
                <h1>MyWallet</h1>
            </LogoWrapper>
            
            <FormWrapper>
                <form>
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