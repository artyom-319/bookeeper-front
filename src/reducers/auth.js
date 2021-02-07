import update from 'react-addons-update';
import { LOG_IN_ERROR, LOG_IN_SUCCESS } from '../actions/auth';

const initialState = {
    isAuthenticated: false,
    username: '',
};

export default function authReducer(store = initialState, action) {
    console.log(action);
    console.log(document.cookie);
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return update(store, {
                isAuthenticated: { $set: true },
                username: { $set: action.meta.username },
            });
        case LOG_IN_ERROR:
            return store;
        default:
            return store;
    }
}
