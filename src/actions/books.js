import { createAction } from 'redux-api-middleware';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_ERROR = 'LOAD_BOOKS_ERROR';

export const LOAD_BOOK_DETAILS = 'LOAD_BOOK_DETAILS';
export const LOAD_BOOK_DETAILS_SUCCESS = 'LOAD_BOOK_DETAILS_SUCCESS';
export const LOAD_BOOK_DETAILS_ERROR = 'LOAD_BOOK_DETAILS_ERROR';

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
