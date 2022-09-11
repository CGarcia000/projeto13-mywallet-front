import styled from "styled-components";

import { RegisterItem } from "./RegisterItem";


const registersArray = [
    {
        day: '30/10',
        name: 'Almoço',
        cost: 23.33,
        type: 'output'
    },
    {
        day: '31/10',
        name: 'Almoço2',
        cost: 23.33,
        type: 'input'
    },
    {
        day: '32/10',
        name: 'Almoço3',
        cost: 23.33,
        type: 'input'
    },
    {
        day: '33/10',
        name: 'Almoço4',
        cost: 23.33,
        type: 'output'
    },
    {
        day: '34/10',
        name: 'Almoço5',
        cost: 23.33,
        type: 'output'
    },
]

const totalRequest = {
    total: 1232312,
    type: 'positive'
}

const isPositive = totalRequest.type === 'positive';

export function Registers() {
    return (
        <>
            <RegistersDiv>
                {registersArray.map((register, index) => <RegisterItem key={index} registerObj={register} />)}
            </RegistersDiv>
            <TotalDiv color={isPositive ? '#03AC00' : '#C70000'}>
                <div>SALDO</div>
                <div>{totalRequest.total}</div>
            </TotalDiv>
        </>
    );
}

const RegistersDiv = styled.div`
    position: absolute;
    top: 0;
    width: 98%;
    max-height: 60vh;
    overflow: hidden;
    overflow-y: scroll;
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