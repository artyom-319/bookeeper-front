import { createAction } from 'redux-api-middleware';

export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_AUTHORS_ERROR = 'LOAD_AUTHORS_ERROR';

export const CREATE_AUTHOR = 'CREATE_AUTHOR';
export const CREATE_AUTHOR_SUCCESS = 'CREATE_AUTHOR_SUCCESS';
export const CREATE_AUTHOR_ERROR = 'CREATE_AUTHOR_ERROR';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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

export const createAuthor = (url, data) => {
    return createAction({
        endpoint: url,
        method: 'POST',
        body: data,
        headers: {
            'content-type': 'application/json',
        },
        types: [
            CREATE_AUTHOR,
            CREATE_AUTHOR_SUCCESS,
            CREATE_AUTHOR_ERROR,
        ],
    });
};

export const openModal = () => ({
    type: OPEN_MODAL,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
