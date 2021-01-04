import { SELECT_PAGE } from '../actions/routing';

export default function routingReducer(store = { activePage: 'books' }, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return {activePage: action.activePage};
        default:
            return store;
    }
}
