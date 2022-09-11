import { useState } from "react";
import { Link } from "react-router-dom";

import { ArrowUUpLeft } from "phosphor-react";

import { Title, BodyForm, FormWrapper, SubmitButton } from "./StyledComponentsAddRegisters";

export function OutputRegister() {
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return (
        <BodyForm>
            <Title>
                <h2>Nova saída</h2>
                <Link to='/home'>
                    <ArrowUUpLeft color="white" weight="bold" size={'2rem'} />
                </Link>
            </Title>

            <FormWrapper>
                <form>
                    <input type="text" placeholder="valor" value={cost}
                        onChange={e => {
                            if (isLoading) return;
                            setCost(e.target.value.replace(/\D/g, ''));
                        }} required
                    />

                    <input type='text' placeholder="descrição" value={description}
                        onChange={e => {
                            if (isLoading) return;
                            setDescription(e.target.value);
                        }} required
                    />

                    <SubmitButton>
                        Salvar saída
                    </SubmitButton>
                </form>
            </FormWrapper>

        </BodyForm>
    );
}