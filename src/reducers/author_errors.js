import update from 'react-addons-update';

import { CREATE_AUTHOR_ERROR, LOAD_AUTHOR_DETAILS_ERROR } from '../actions/authors';
import { LOAD_AUTHORS_ERROR, UPDATE_AUTHOR_ERROR } from '../actions/authors';


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
    LOAD_AUTHORS_ERROR,
    LOAD_AUTHOR_DETAILS_ERROR,
];

const FORM_ERRORS = [
    CREATE_AUTHOR_ERROR,
    UPDATE_AUTHOR_ERROR,
];
