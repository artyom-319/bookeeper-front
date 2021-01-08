import update from 'react-addons-update';

import { mapDtoToObject } from './books';
import { LOAD_BOOK_DETAILS, LOAD_BOOK_DETAILS_ERROR, LOAD_BOOK_DETAILS_SUCCESS } from '../actions/books';

const initialState = {
    isLoading: false,
    instance: null,
    commentIds: [],
    commentObjects: {},
};

export default function bookDetailsReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_BOOK_DETAILS:
            return update(store, {
                isLoading: { $set: true },
            });
        case LOAD_BOOK_DETAILS_SUCCESS:
            const book = mapDtoToObject(action.payload);
            const commentObjects = book.comments.reduce((a, e) => ({...a, [e.id]: e}), {});
            console.log(commentObjects);
            return update(store, {
                isLoading: { $set: false },
                instance: { $set: book },
                commentIds: { $set: book.comments.map(e => e.id) },
                commentObjects: { $merge: commentObjects },
            });
        case LOAD_BOOK_DETAILS_ERROR:
            return update(store, {
                isLoading: { $set: false },
            });
        default:
            return store;
    }
};
