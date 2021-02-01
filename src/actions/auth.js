import { createAction } from 'redux-api-middleware';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_OUT = 'LOG_OUT';

const url = '/login';

export const login = (username, password) => {
    const basicToken = prepareBasicToken(username, password);
    return createAction({
        endpoint: url,
        method: 'POST',
        headers: {
            'Authorization': `Basic ${ basicToken }`
        },
        types: [
            LOG_IN,
            LOG_IN_SUCCESS,
            LOG_IN_ERROR,
        ],
    });
};

export const logout = () => {
    return {
        type: LOG_OUT,
    };
};

const prepareBasicToken = (username, password) => {
    return btoa(`${ username }:${ password }`);
};
