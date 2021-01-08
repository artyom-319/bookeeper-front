import { createAction, getJSON } from 'redux-api-middleware';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_ERROR = 'LOAD_BOOKS_ERROR';

export const LOAD_BOOK_DETAILS = 'LOAD_BOOK_DETAILS';
export const LOAD_BOOK_DETAILS_SUCCESS = 'LOAD_BOOK_DETAILS_SUCCESS';
export const LOAD_BOOK_DETAILS_ERROR = 'LOAD_BOOK_DETAILS_ERROR';

export const CREATE_BOOK = 'CREATE_BOOK';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_BOOK_ERROR = 'CREATE_BOOK_ERROR';

export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_ERROR = 'DELETE_BOOK_ERROR';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const OPEN_BOOK_MODAL = 'OPEN_BOOK_MODAL';
export const CLOSE_BOOK_MODAL = 'CLOSE_BOOK_MODAL';

export const loadBooks = url => {
    return createAction({
        endpoint: url,
        method: 'GET',
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

export const openModal = () => ({
    type: OPEN_BOOK_MODAL,
});

export const closeModal = () => ({
    type: CLOSE_BOOK_MODAL,
});
