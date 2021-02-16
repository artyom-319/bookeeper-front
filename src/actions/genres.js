import { createAction } from 'redux-api-middleware';

export const LOAD_GENRES = 'LOAD_GENRES';
export const LOAD_GENRES_SUCCESS = 'LOAD_GENRES_SUCCESS';
export const LOAD_GENRES_ERROR = 'LOAD_GENRES_ERROR';

export const loadGenres = (url) => {
    return createAction({
        endpoint: url,
        method: 'GET',
        credentials: 'include',
        types: [
            LOAD_GENRES,
            LOAD_GENRES_SUCCESS,
            LOAD_GENRES_ERROR,
        ]
    });
};
