import { createAction } from 'redux-api-middleware';
import urls from '../constants/urls';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';

const USERNAME_FORM_LABEL = 'username';
const PASSWORD_FORM_LABEL = 'password';

export const login = (username, password) => {
    const body = prepareFormUrlEncodedView(username, password);
    return createAction({
        endpoint: urls.login,
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        body: body,
        types: [
            LOG_IN,
            {
                type: LOG_IN_SUCCESS,
                meta: {
                    username,
                },
                payload: (action, state, res) => {
                    console.log(res.headers.get('Set-Cookie'));
                },
            },
            LOG_IN_ERROR,
        ],
    });
};

export const logout = () => (
    createAction({
        endpoint: urls.logout,
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        types: [
            LOG_OUT,
            LOG_OUT_SUCCESS,
            LOG_OUT_ERROR,
        ],
    })
);

const prepareFormUrlEncodedView = (username, password) => (
    `${ USERNAME_FORM_LABEL }=${ username }&${ PASSWORD_FORM_LABEL }=${ password }`
);

const prepareBasicToken = (username, password) => {
    return btoa(`${ username }:${ password }`);
};
