import { combineReducers } from 'redux';

import authorReducer from './authors';
import authorDetailsReducer from './author_details';
import booksReducer from './books';
import bookDetailsReducer from './book_details';
import genreReducer from './genres';
import routingReducer from './routing';

export default function initReducers() {
    return combineReducers({
        routing: routingReducer,
        book: combineReducers({
            list: booksReducer,
            details: bookDetailsReducer,
        }),
        author:  combineReducers({
            list: authorReducer,
            details: authorDetailsReducer
        }),
        genres: genreReducer,
        // comments: commentReducer,
    });
}
