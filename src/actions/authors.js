import { createAction } from 'redux-api-middleware';

export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_AUTHORS_ERROR = 'LOAD_AUTHORS_ERROR';

export const CREATE_AUTHOR = 'CREATE_AUTHOR';
export const CREATE_AUTHOR_SUCCESS = 'CREATE_AUTHOR_SUCCESS';
export const CREATE_AUTHOR_ERROR = 'CREATE_AUTHOR_ERROR';

export const LOAD_AUTHOR_DETAILS = 'LOAD_AUTHOR_DETAILS';
export const LOAD_AUTHOR_DETAILS_SUCCESS = 'LOAD_AUTHOR_DETAILS_SUCCESS';
export const LOAD_AUTHOR_DETAILS_ERROR = 'LOAD_AUTHOR_DETAILS_ERROR';

export const DELETE_AUTHOR = 'DELETE_AUTHOR';
export const DELETE_AUTHOR_SUCCESS = 'DELETE_AUTHOR_SUCCESS';
export const DELETE_AUTHOR_ERROR = 'DELETE_AUTHOR_ERROR';

export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const UPDATE_AUTHOR_SUCCESS = 'UPDATE_AUTHOR_SUCCESS';
export const UPDATE_AUTHOR_ERROR = 'UPDATE_AUTHOR_ERROR';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_AUTHOR_EDIT_MODE = 'OPEN_AUTHOR_EDIT_MODE';
export const CLOSE_AUTHOR_EDIT_MODE = 'CLOSE_AUTHOR_EDIT_MODE';

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
        credentials: 'include',
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

export const loadAuthorDetails = url => {
    return createAction({
        endpoint: url,
        method: 'GET',
        credentials: 'include',
        types: [
            LOAD_AUTHOR_DETAILS,
            LOAD_AUTHOR_DETAILS_SUCCESS,
            LOAD_AUTHOR_DETAILS_ERROR,
        ],
    });
};

export const deleteAuthor = (url, entityId) => {
    return createAction({
        endpoint: url,
        method: 'DELETE',
        credentials: 'include',
        types: [
            DELETE_AUTHOR,
            {
                type: DELETE_AUTHOR_SUCCESS,
                meta: {
                    entityId,
                },
            },
            DELETE_AUTHOR_ERROR,
        ],
    });
};

export const updateAuthor = (url, data) => (
    createAction({
        endpoint: url,
        method: 'PUT',
        body: data,
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
        types: [
            UPDATE_AUTHOR,
            UPDATE_AUTHOR_SUCCESS,
            UPDATE_AUTHOR_ERROR,
        ],
    })
);

export const openModal = () => ({
    type: OPEN_MODAL,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});

export const openEditMode = () => ({
    type: OPEN_AUTHOR_EDIT_MODE,
});

export const closeEditMode = () => ({
    type: CLOSE_AUTHOR_EDIT_MODE,
});
