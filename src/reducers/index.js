import { combineReducers } from 'redux';

import authorReducer from './authors';
import authorDetailsReducer from './author_details';
import authorErrorReducer from './author_errors';
import booksReducer from './books';
import bookDetailsReducer from './book_details';
import bookErrorReducer from './book_errors';
import genreReducer from './genres';
import genreErrorReducer from './genre_errors';
import routingReducer from './routing';
import commonErrorReducer from './errors';

export default function initReducers() {
    return combineReducers({
        routing: routingReducer,
        errors: commonErrorReducer,
        book: combineReducers({
            list: booksReducer,
            details: bookDetailsReducer,
            errors: bookErrorReducer,
        }),
        author:  combineReducers({
            list: authorReducer,
            details: authorDetailsReducer,
            errors: authorErrorReducer,
        }),
        genre: combineReducers({
            list: genreReducer,
            errors: genreErrorReducer,
        }),
    });
}
