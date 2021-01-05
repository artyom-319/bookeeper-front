import { createAction } from 'redux-api-middleware';

export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_AUTHORS_ERROR = 'LOAD_AUTHORS_ERROR';

export const loadAuthors = (url) => {
    return createAction({
        endpoint: url,
        method: 'GET',
        types: [
            LOAD_AUTHORS,
            LOAD_AUTHORS_SUCCESS,
            LOAD_AUTHORS_ERROR,
        ]
    });
};
