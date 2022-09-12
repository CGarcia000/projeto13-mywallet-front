import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function postSignUp(body) {
    const promise = axios({
        method: 'post',
        url: `${BASE_URL}/sign-up`,
        data: body,
    })
    return promise;
}

export function postLogin(body) {
    const promise = axios({
        method: 'post',
        url: `${BASE_URL}/sign-in`,
        data: body,
    })
    return promise;
}

export function getRegisters(token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/wallet`,
        headers: {
            authorization: 'Bearer ' + token,
        },
    })
    return promise;
}

export function postRegister(body, token) {
    const promise = axios({
        method: 'post',
        url: `${BASE_URL}/wallet/add`,
        data: body,
        headers: {
            authorization: 'Bearer ' + token,
        },
    })
    return promise;
}