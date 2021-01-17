import update from 'react-addons-update';

import { CREATE_BOOK_ERROR, CREATE_COMMENT_ERROR } from '../actions/books';
import { LOAD_BOOK_DETAILS_ERROR, LOAD_BOOKS_ERROR, UPDATE_BOOK_ERROR } from '../actions/books';


const errorsInitialState = {
    occurred: false,
    message: '',
};

const initialState = {
    plain: errorsInitialState,
    form: errorsInitialState,
};

export default function errorsReducer(store = initialState, action) {
    if (PLAIN_PAGE_ERRORS.includes(action.type)) {
        return update(store, {
            plain: {
                occurred: { $set: action.error },
                message: { $set: action.payload.message },
            },
        });
    } else if (FORM_ERRORS.includes(action.type)) {
        return update(store, {
            form: {
                occurred: { $set: action.error },
                message: { $set: action.payload.message },
            },
        });
    } else {
        return update(store, {
            form: { $set: errorsInitialState },
            plain: { $set: errorsInitialState },
        });
    }
};

const PLAIN_PAGE_ERRORS = [
    LOAD_BOOKS_ERROR,
    LOAD_BOOK_DETAILS_ERROR,
];

const FORM_ERRORS = [
    CREATE_BOOK_ERROR,
    CREATE_COMMENT_ERROR,
    UPDATE_BOOK_ERROR,
];
