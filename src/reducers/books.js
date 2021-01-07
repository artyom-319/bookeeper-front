import update from 'react-addons-update';
import { LOAD_BOOKS, LOAD_BOOKS_ERROR, LOAD_BOOKS_SUCCESS } from '../actions/books';

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
    };
};
