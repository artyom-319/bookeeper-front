import update from 'react-addons-update';

import { DELETE_AUTHOR_ERROR } from '../actions/authors';
import { DELETE_BOOK_ERROR } from '../actions/books';


const errorsInitialState = {
    occurred: false,
    message: '',
};

const initialState = {
    modal: errorsInitialState,
};

export default function errorsReducer(store = initialState, action) {
    if (MODAL_ERRORS.includes(action.type)) {
        return update(store, {
            modal: {
                occurred: { $set: action.error },
                message: { $set: action.payload.message },
            },
        });
    } else {
        return update(store, {
            modal: { $set: errorsInitialState },
        });
    }
};

const MODAL_ERRORS = [
    DELETE_AUTHOR_ERROR,
    DELETE_BOOK_ERROR,
];
