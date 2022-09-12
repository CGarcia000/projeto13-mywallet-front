import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ArrowUUpLeft } from "phosphor-react";

import { Title, BodyForm, FormWrapper, SubmitButton } from "./StyledComponentsAddRegisters";

import { UserContext } from '../../App';

import { postRegister } from "../../../assets/services/requests";

export function OutputRegister() {
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [user] = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();

        const body = {
            cost,
            description,
            date: Date.now(),
            type: 'output',
        }
        postRegister(body, user.token).then(res => {
            navigate('/home');
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <BodyForm>
            <Title>
                <h2>Nova saída</h2>
                <Link to='/home'>
                    <ArrowUUpLeft color="white" weight="bold" size={'2rem'} />
                </Link>
            </Title>

            <FormWrapper>
                <form onSubmit={handleSubmit}>
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