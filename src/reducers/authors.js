import update from 'react-addons-update';

import { LOAD_AUTHORS, LOAD_AUTHORS_ERROR, LOAD_AUTHORS_SUCCESS } from '../actions/authors';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/authors';
import { CREATE_AUTHOR_SUCCESS } from '../actions/authors';
import { DELETE_AUTHOR_SUCCESS } from '../actions/authors';

const errorsInitialState = {
    occurred: false,
    message: '',
};

const initialState = {
    objectIds: [],
    objects: {},
    isLoading: false,
    isModalOpen: false,
    loadingError: errorsInitialState,
    formError: errorsInitialState,
    errorOccurred: false,
    errorMessage: '',
};

export default function authorReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_AUTHORS:
            return update(store, {
                isLoading: { $set: true },
                loadingError: {
                    occurred: { $set: false },
                    message: { $set: '' }
                },
            });

        case LOAD_AUTHORS_SUCCESS:
            const authorIds = action.payload.map(e => e.id);
            const authors = action.payload.reduce((a, e) => ({...a, [e.id]: e}), {});
            return update(store, {
                isLoading: { $set: false },
                objectIds: { $set: authorIds },
                objects: {
                    $merge: authors,
                },
            });

        case LOAD_AUTHORS_ERROR:
            return update(store, {
                isLoading: { $set: false },
                loadingError: {
                    occurred: { $set: action.error },
                    message: { $set: action.payload.message }
                },
            });

        case CREATE_AUTHOR_SUCCESS:
            console.log(action);
            return update(store, {
                isModalOpen: { $set: false },
                objectIds: { $unshift: [ action.payload.id ] },
                objects: { $merge: { [action.payload.id]: action.payload }}
            });
        case DELETE_AUTHOR_SUCCESS:
            console.log(action);
            const deletedId = action.meta.entityId;
            const resultObjects = Object.keys(store.objects)
                .filter( key => key !== deletedId )
                .reduce((res, key) => (res[key] = store.objects[key], res), {});
            return update(store, {
                objectIds: { $splice:  [[ store.objectIds.indexOf(deletedId), 1 ]]},
                objects: { $set: resultObjects }
            });
        case OPEN_MODAL:
            return update(store, { isModalOpen: { $set: true } });
        case CLOSE_MODAL:
            return update(store, { isModalOpen: { $set: false } });
        default:
            return store;
    }
}
