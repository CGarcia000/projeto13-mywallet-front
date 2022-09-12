import styled from "styled-components";

import { RegisterItem } from "./RegisterItem";

export function Registers({
    registersArray,
    total
}) {
    const isPositive = total.type === 'positive';
    return (
        <>
            <RegistersDiv>
                {registersArray.map((register, index) => <RegisterItem key={index} registerObj={register} />)}
            </RegistersDiv>
            <TotalDiv color={isPositive ? '#03AC00' : '#C70000'}>
                <div>SALDO</div>
                <div>{total.total}</div>
            </TotalDiv>
        </>
    );
}

const RegistersDiv = styled.div`
    position: absolute;
    overflow-y: scroll;
    top: 0;
    width: 98%;
    max-height: 60vh;
    margin-top: 1rem;
    padding: 0 0.3rem;
`;

const TotalDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 98%;
    padding-left: 0.5rem;
    padding-right: 0.3rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
        font-weight: bold;
        color: black;
    }
    
    div:nth-child(2) {
        font-size: 18px;
        color: ${props => props.color}
    }
`;