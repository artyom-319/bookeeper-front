import update from 'react-addons-update';

import { mapDtoToObject } from './books';
import { LOAD_BOOK_DETAILS, LOAD_BOOK_DETAILS_ERROR, LOAD_BOOK_DETAILS_SUCCESS } from '../actions/books';
import { CLOSE_BOOK_EDIT_MODE, OPEN_BOOK_EDIT_MODE } from '../actions/books';
import { CREATE_COMMENT_SUCCESS, UPDATE_BOOK_SUCCESS } from '../actions/books';

const initialState = {
    isLoading: false,
    instance: null,
    commentIds: [],
    commentObjects: {},
    editModeEnabled: false,
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
            return update(store, {
                isLoading: { $set: false },
                instance: { $set: book },
                commentIds: { $set: book.comments.map(e => e.id) },
                commentObjects: { $merge: commentObjects },
            });
        case UPDATE_BOOK_SUCCESS:
            return update(store, {
                instance: { $set: mapDtoToObject(action.payload) },
                editModeEnabled: { $set : false },
            });
        case LOAD_BOOK_DETAILS_ERROR:
            return update(store, {
                isLoading: { $set: false },
            });
        case CREATE_COMMENT_SUCCESS:
            const createdComment = action.payload;
            if (createdComment.bookId === store.instance.id) {
                return update(store, {
                    commentIds: { $push: [ createdComment.id ] },
                    commentObjects: { $merge: { [createdComment.id]: createdComment } }
                });
            } else {
                return store;
            }
        case OPEN_BOOK_EDIT_MODE:
            return update(store, {
                editModeEnabled: { $set : true },
            });
        case CLOSE_BOOK_EDIT_MODE:
            return update(store, {
                editModeEnabled: { $set : false },
            });
        default:
            return store;
    }
};
