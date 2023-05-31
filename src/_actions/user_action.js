import axios from 'axios';
import {
    REGISTER_USER,
} from './types';


export function registerUser(dataToSubmit) {

    const request = axios.post('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/auth/signup', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}