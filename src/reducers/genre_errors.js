import update from 'react-addons-update';

import { LOAD_GENRES_ERROR } from '../actions/genres';


const errorsInitialState = {
    occurred: false,
    message: '',
};

const initialState = {
    plain: errorsInitialState,
};

export default function errorsReducer(store = initialState, action) {
    if (PLAIN_PAGE_ERRORS.includes(action.type)) {
        return update(store, {
            plain: {
                occurred: { $set: action.error },
                message: { $set: action.payload.message },
            },
        });
    } else {
        return update(store, {
            plain: { $set: errorsInitialState },
        });
    }
};

const PLAIN_PAGE_ERRORS = [
    LOAD_GENRES_ERROR,
];
