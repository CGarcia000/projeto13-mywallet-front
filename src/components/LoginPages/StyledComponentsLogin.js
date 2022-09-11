import styled from "styled-components";

const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.marginTop};
    margin-bottom: 2rem;
    
    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: white;
    }
`
const FormWrapper = styled.div`
    width: 20rem;    
    margin: 0 auto;
    
    form {
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 100%;
        height: 3rem;
        font-size: 1.3rem;
        color: black;
        border: none;
        border-radius: 5px;
        margin-bottom: 0.5rem;
        padding: 0 0.5rem;
    }

    input::placeholder {
        color: black;
        opacity: 0.8;
        text-transform: capitalize;
    }

    @media(max-width: 650px) {
        width: 90%
    }
`
const SubmitButton = styled.button.attrs({ type: 'submit' })`
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 2.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    background-color: #A328D6;
    cursor: pointer;
`

const LinkWrapper = styled.div`
    margin-top: 2rem;

    a {
        color: white;
        font-weight: bold;
        font-size: 0.9rem;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }
`

export { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper };