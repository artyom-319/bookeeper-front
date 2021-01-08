import update from 'react-addons-update';

import { LOAD_AUTHOR_DETAILS, LOAD_AUTHOR_DETAILS_ERROR, LOAD_AUTHOR_DETAILS_SUCCESS } from '../actions/authors';
import { UPDATE_AUTHOR, UPDATE_AUTHOR_ERROR, UPDATE_AUTHOR_SUCCESS } from '../actions/authors';
import { OPEN_AUTHOR_EDIT_MODE, CLOSE_AUTHOR_EDIT_MODE } from '../actions/authors';

const initialState = {
    isLoading: false,
    editModeEnabled: false,
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
        case UPDATE_AUTHOR_SUCCESS:
            return update(store, {
                instance: { $set: action.payload },
                editModeEnabled: { $set : false },
            });
        case LOAD_AUTHOR_DETAILS_ERROR:
            return update(store, {
                isLoading: { $set: false },
            });
        case OPEN_AUTHOR_EDIT_MODE:
            return update(store, {
                editModeEnabled: { $set : true },
            });
        case CLOSE_AUTHOR_EDIT_MODE:
            return update(store, {
                editModeEnabled: { $set : false },
            });
        default:
            return store;
    }
};
