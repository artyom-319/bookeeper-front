import { createAction } from 'redux-api-middleware';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_ERROR = 'LOAD_BOOKS_ERROR';

export const LOAD_BOOK_DETAILS = 'LOAD_BOOK_DETAILS';
export const LOAD_BOOK_DETAILS_SUCCESS = 'LOAD_BOOK_DETAILS_SUCCESS';
export const LOAD_BOOK_DETAILS_ERROR = 'LOAD_BOOK_DETAILS_ERROR';

export const CREATE_BOOK = 'CREATE_BOOK';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_BOOK_ERROR = 'CREATE_BOOK_ERROR';

export const UPDATE_BOOK = 'UPDATE_BOOK';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const UPDATE_BOOK_ERROR = 'UPDATE_BOOK_ERROR';

export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_ERROR = 'DELETE_BOOK_ERROR';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const OPEN_BOOK_MODAL = 'OPEN_BOOK_MODAL';
export const CLOSE_BOOK_MODAL = 'CLOSE_BOOK_MODAL';

export const OPEN_BOOK_EDIT_MODE = 'OPEN_BOOK_EDIT_MODE';
export const CLOSE_BOOK_EDIT_MODE = 'CLOSE_BOOK_EDIT_MODE';

export const loadBooks = url => {
    return createAction({
        endpoint: url,
        method: 'GET',
        credentials: 'include',
        types: [
            LOAD_BOOKS,
            LOAD_BOOKS_SUCCESS,
            LOAD_BOOKS_ERROR,
        ]
    });
};

export const loadBookDetails = url => (
    createAction({
        endpoint: url,
        method: 'GET',
        credentials: 'include',
        types: [
            LOAD_BOOK_DETAILS,
            LOAD_BOOK_DETAILS_SUCCESS,
            LOAD_BOOK_DETAILS_ERROR,
        ],
    })
);

export const createBook = (url, data) => {
    return createAction({
        endpoint: url,
        method: 'POST',
        body: data,
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
        types: [
            CREATE_BOOK,
            CREATE_BOOK_SUCCESS,
            CREATE_BOOK_ERROR,
        ],
    });
};

export const deleteBook = (url, entityId) => {
    return createAction({
        endpoint: url,
        method: 'DELETE',
        credentials: 'include',
        types: [
            DELETE_BOOK,
            {
                type: DELETE_BOOK_SUCCESS,
                meta: {
                    entityId,
                },
            },
            DELETE_BOOK_ERROR,
        ],
    });
};

export const createComment = (url, data) => (
    createAction({
        endpoint: url,
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
            'content-type': 'application/json',
        },
        types: [
            CREATE_COMMENT,
            CREATE_COMMENT_SUCCESS,
            CREATE_COMMENT_ERROR,
        ],
    })
);

export const updateBook = (url, data) => (
    createAction({
        endpoint: url,
        method: 'PUT',
        body: data,
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
        types: [
            UPDATE_BOOK,
            UPDATE_BOOK_SUCCESS,
            UPDATE_BOOK_ERROR,
        ],
    })
);

export const openModal = () => ({
    type: OPEN_BOOK_MODAL,
});

export const closeModal = () => ({
    type: CLOSE_BOOK_MODAL,
});

export const openEditMode = () => ({
    type: OPEN_BOOK_EDIT_MODE,
});

export const closeEditMode = () => ({
    type: CLOSE_BOOK_EDIT_MODE,
});
