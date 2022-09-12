import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SignOut, PlusCircle, MinusCircle } from "phosphor-react";

import { BodyWallet, Title, WalletRegisters, ButtonWallet } from "./StyledComponentsHome";

import { Registers } from "./RegisterComponents/Registers";

import { UserContext } from '../App';

import { getRegisters } from "../../assets/services/requests";

export function Home() {
    const [noRegister, setNoRegister] = useState(false);
    const [registers, setRegisters] = useState([]);
    const [total, setTotal] = useState([]);

    const navigate = useNavigate();

    const [user] = useContext(UserContext);

    useEffect(() => {
        getRegisters(user.token).then(res => {
            setRegisters(res.data.registers);
            setTotal(res.data.total);
            const registerArr = res.data.registers;
            if (registerArr.length > 0) {
                setNoRegister(current => false);
            } else {
                setNoRegister(current => true);
            }
        }).catch(e => {
            console.log(e);
        })
    }, []);

    return (
        <BodyWallet>
            <Title>
                <h2>Olá, {user.name}</h2>
                <Link to='/'>
                    <SignOut color="white" weight="bold" size={'2rem'} />
                </Link>
            </Title>

            <WalletRegisters>
                {noRegister ?
                    (<span>Não há registros de entrada ou saída</span>) :
                    <Registers registersArray={registers} total={total} />}
            </WalletRegisters>

            <ButtonWallet>
                <button onClick={() => navigate('/home/input')}>
                    <PlusCircle color="white" weight="bold" size={'1.5rem'} />
                    <span>Nova entrada</span>
                </button>

                <button onClick={() => navigate('/home/output')}>
                    <MinusCircle color="white" weight="bold" size={'1.5rem'} />
                    <span>Nova saída</span>
                </button>
            </ButtonWallet>
        </BodyWallet>
    );
}