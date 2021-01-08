import update from 'react-addons-update';
import { DELETE_BOOK_SUCCESS, LOAD_BOOKS, LOAD_BOOKS_ERROR, LOAD_BOOKS_SUCCESS } from '../actions/books';
import { CLOSE_BOOK_MODAL, OPEN_BOOK_MODAL } from '../actions/books';
import { CREATE_BOOK_SUCCESS } from '../actions/books';

const initialState = {
    objectIds: [],
    objects: {},
    isLoading: false,
    isModalOpen: false,
};

export default function booksReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_BOOKS:
            return update(store, {
                isLoading: { $set: true },
            });

        case LOAD_BOOKS_SUCCESS:
            const bookIds = action.payload.map(e => e.id);
            const books = action.payload
                .map(mapDtoToObject)
                .reduce((a, e) => ({...a, [e.id]: e}), {});
            return update(store, {
                isLoading: { $set: false },
                objectIds: { $set: bookIds },
                objects: { $merge: books },
            });

        case LOAD_BOOKS_ERROR:
            return update(store, {
                isLoading: { $set: false },
            });

        case CREATE_BOOK_SUCCESS:
            console.log(action);
            const createdBook = mapDtoToObject(action.payload);
            return update(store, {
                isModalOpen: { $set: false },
                objectIds: { $unshift: [ action.payload.id ] },
                objects: { $merge: { [createdBook.id]: createdBook }}
            });

        case DELETE_BOOK_SUCCESS:
            console.log(action);
            const deletedId = action.meta.entityId;
            const resultObjects = Object.keys(store.objects)
                .filter( key => key !== deletedId )
                .reduce((res, key) => (res[key] = store.objects[key], res), {});
            return update(store, {
                objectIds: { $splice:  [[ store.objectIds.indexOf(deletedId), 1 ]]},
                objects: { $set: resultObjects }
            });

        case OPEN_BOOK_MODAL:
            return update(store, { isModalOpen: { $set: true } });

        case CLOSE_BOOK_MODAL:
            return update(store, { isModalOpen: { $set: false } });

        default:
            return store;
    }
}

export const mapDtoToObject = bookDto => {
    return {
        id: bookDto.id,
        title: bookDto.title,
        author: {
            id: bookDto.authorId,
            name: bookDto.authorName,
        },
        genre: bookDto.genreTitle,
        comments: bookDto.comments,
    };
};
