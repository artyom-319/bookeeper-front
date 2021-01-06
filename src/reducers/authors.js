import update from 'react-addons-update';

import {
    CREATE_AUTHOR_SUCCESS,
    LOAD_AUTHORS,
    LOAD_AUTHORS_ERROR,
    LOAD_AUTHORS_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/authors';

const initialState = {
    authorList: [],
    authors: {},
    isLoading: false,
    isModalOpen: false,
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

        case CREATE_AUTHOR_SUCCESS:
            console.log(action);
            return update(store, {
                isModalOpen: { $set: false },
                authorList: { $unshift: [ action.payload.id ] },
                authors: { $merge: { [action.payload.id]: action.payload }}
            });
        case OPEN_MODAL:
            return update(store, { isModalOpen: { $set: true } });
        case CLOSE_MODAL:
            return update(store, { isModalOpen: { $set: false } });
        default:
            return store;
    }
}
