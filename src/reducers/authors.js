import update from 'react-addons-update';

import { LOAD_AUTHORS, LOAD_AUTHORS_ERROR, LOAD_AUTHORS_SUCCESS } from '../actions/authors';

const initialState = {
    authorList: [],
    authors: {},
    isLoading: false,
};

export default function authorReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_AUTHORS:
            return update(store, { isLoading: { $set: true } });
        case LOAD_AUTHORS_SUCCESS:
            return update(store, {
                isLoading: { $set: false },
                authorList: { $set: action.apiResponse.authorList },
                authors: {
                    $merge: action.apiResponse.authors,
                },
            });
        case LOAD_AUTHORS_ERROR:
            // todo: обработка
            return update(store, { isLoading: { $set: false } });
        default:
            return store;
    }
}
