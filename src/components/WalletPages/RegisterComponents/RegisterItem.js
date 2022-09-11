import styled from "styled-components";


export function RegisterItem({
    registerObj
}) {

    const isOutput = registerObj.type === 'output';

    return (
        <RegisterDiv>
            <Day>{registerObj.day}</Day>
            <Name>{registerObj.name}</Name>
            <Cost color={isOutput ? '#C70000' : '#03AC00'}>{registerObj.cost}</Cost>
        </RegisterDiv>
    );
}

const RegisterDiv = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
`;

const Day = styled.div`
    width: 19%;
    display: flex;
    align-items: center;
    padding-right: 0.2rem;
    opacity: 0.5;
`;

const Name = styled.div`
    width: 56%;
    word-break: break-word;
    color: black;
`;


const Cost = styled.div`
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: right;
    min-width: 25%;
    flex-shrink: 0;
    color: ${props => props.color}
`;  
