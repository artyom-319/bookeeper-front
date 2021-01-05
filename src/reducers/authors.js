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
            const authorIds = action.payload.map(e => e.id);
            const authors = action.payload.reduce((a, e) => ({...a, [e.id]: e}), {});
            return update(store, {
                isLoading: { $set: false },
                authorList: { $set: authorIds },
                authors: {
                    $merge: authors,
                },
            });
        case LOAD_AUTHORS_ERROR:
            // todo: обработка
            return update(store, { isLoading: { $set: false } });
        default:
            return store;
    }
}
