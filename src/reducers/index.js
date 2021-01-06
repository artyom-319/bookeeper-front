import { combineReducers } from 'redux';

import authorReducer from './authors';
import genreReducer from './genres';
import routingReducer from './routing';
import authorDetailsReducer from './author_details';

export default function initReducers() {
    return combineReducers({
        // todo: reducers
        routing: routingReducer,
        // books: bookReducer,
        author:  combineReducers({
            list: authorReducer,
            details: authorDetailsReducer
        }),
        genres: genreReducer,
        // comments: commentReducer,
    });
}
