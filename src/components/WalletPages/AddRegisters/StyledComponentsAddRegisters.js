import styled from "styled-components";

const Title = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1.4rem;
word-break: break-word;
margin-bottom: 2rem;

h2 {
    max-height: 3.6rem;
    color: white;
}
`

const BodyForm = styled.div`
margin: 0 auto;
width: 90%;
overflow: hidden !important;
`;

const FormWrapper = styled.div`
width: 100%;

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
    margin-bottom: 0.7rem;
    padding: 0 0.5rem;
}

input::placeholder {
    color: black;
    opacity: 0.8;
    text-transform: capitalize;
}
`;

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
`;

export { Title, BodyForm, FormWrapper, SubmitButton };