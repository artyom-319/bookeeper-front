import update from 'react-addons-update';

import { LOAD_AUTHOR_DETAILS, LOAD_AUTHOR_DETAILS_ERROR, LOAD_AUTHOR_DETAILS_SUCCESS } from '../actions/authors';

const initialState = {
    isLoading: false,
    instance: null,
};

export default function authorDetailsReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_AUTHOR_DETAILS:
            return update(store, {
                isLoading: { $set: true },
            });
        case LOAD_AUTHOR_DETAILS_SUCCESS:
            return update(store, {
                isLoading: { $set: false },
                instance: { $set: action.payload },
            });
        case LOAD_AUTHOR_DETAILS_ERROR:
            return update(store, {
                isLoading: { $set: false },
            });
        default:
            return store;
    }
};
