import { combineReducers } from 'redux';
import routingReducer from "./routing";

export default function initReducers() {
    return combineReducers({
        // todo: reducers
        routing: routingReducer,
        // books: bookReducer,
        // authors: authorReducer,
        // genres: genreReducer,
        // comments: commentReducer,
    });
}
