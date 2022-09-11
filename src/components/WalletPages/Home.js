import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SignOut, PlusCircle, MinusCircle } from "phosphor-react";

import { BodyWallet, Title, WalletRegisters, ButtonWallet } from "./StyledComponentsHome";

import { Registers } from "./RegisterComponents/Registers";

const account = {
    userName: 'Cecília Garcia da Silveira',
}

export function Home() {
    const [noRegister, setNoRegister] = useState(false);

    const navigate = useNavigate();

    return (
        <BodyWallet>
            <Title>
                <h2>Olá, {account.userName}</h2>
                <Link to='/'>
                    <SignOut color="white" weight="bold" size={'2rem'} />
                </Link>
            </Title>

            <WalletRegisters>
                {noRegister ?
                    (<span>Não há registros de entrada ou saída</span>) :
                    <Registers />}
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