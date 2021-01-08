import { SELECT_PAGE } from '../actions/routing';
import { MAIN_PAGE } from '../constants/pages';

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
        default:
            return store;
    }
}
