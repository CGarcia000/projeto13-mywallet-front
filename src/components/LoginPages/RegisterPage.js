import { useState } from "react";
import { Link } from "react-router-dom";

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from "./StyledComponentsLogin"

export function RegisterPage() {

    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [urlRegister, setUrlRegister] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
            <LogoWrapper marginTop='6rem'>
                <h1>MyWallet</h1>
            </LogoWrapper>
            
            <FormWrapper>
                <form>
                    <input type='text' placeholder="e-mail" value={emailRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setEmailRegister(e.target.value);
                        }} required 
                    />
                    
                    <input type='password' placeholder="senha" value={passwordRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordRegister(e.target.value);
                        }} required 
                    />

                    <input type='text' placeholder="nome" value={nameRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setNameRegister(e.target.value);
                        }} required 
                    />

                    <input type='url' placeholder="url foto" value={urlRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setUrlRegister(e.target.value);
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