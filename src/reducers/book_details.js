import update from 'react-addons-update';

import { mapDtoToObject } from './books';
import { LOAD_BOOK_DETAILS, LOAD_BOOK_DETAILS_ERROR, LOAD_BOOK_DETAILS_SUCCESS } from '../actions/books';

const initialState = {
    isLoading: false,
    instance: null,
};

export default function bookDetailsReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_BOOK_DETAILS:
            return update(store, {
                isLoading: { $set: true },
            });
        case LOAD_BOOK_DETAILS_SUCCESS:
            const book = mapDtoToObject(action.payload);
            return update(store, {
                isLoading: { $set: false },
                instance: { $set: book },
            });
        case LOAD_BOOK_DETAILS_ERROR:
            return update(store, {
                isLoading: { $set: false },
            });
        default:
            return store;
    }
};
