import { SELECT_PAGE } from '../actions/routing';
import { MAIN_PAGE, BOOKS_PAGE, AUTHORS_PAGE } from '../constants/pages';
import { DELETE_BOOK_SUCCESS } from '../actions/books';
import { DELETE_AUTHOR_SUCCESS } from '../actions/authors';

const initialStore = {
    activePage: MAIN_PAGE,
    entityId: null,
};

export default function routingReducer(store = initialStore, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return {
                activePage: action.activePage,
                entityId: action.entityId,
            };
        case DELETE_BOOK_SUCCESS:
            return {
                activePage: BOOKS_PAGE,
                entityId: null,
            };
        case DELETE_AUTHOR_SUCCESS:
            return {
                activePage: AUTHORS_PAGE,
                entityId: null,
            };
        default:
            return store;
    }
}
