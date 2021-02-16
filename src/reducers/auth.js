import update from 'react-addons-update';
import { LOG_IN_ERROR, LOG_IN_SUCCESS, LOG_OUT, LOG_OUT_ERROR, LOG_OUT_SUCCESS } from '../actions/auth';

const initialState = {
    isAuthenticated: false,
    username: '',
    authRequired: false,
};

export default function authReducer(store = initialState, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return update(store, {
                isAuthenticated: { $set: true },
                username: { $set: action.meta.username },
            });
        case LOG_IN_ERROR:
            return store;
        case LOG_OUT || LOG_OUT_SUCCESS || LOG_OUT_ERROR:
            return update(store, {
                isAuthenticated: { $set: false },
                username: { $set: '' },
            })
        default: {
            if (action.error === true && action.payload.status === 401) {
                return update(store, {
                    authRequired: { $set: true },
                });
            }
            return update(store, {
                authRequired: { $set: false },
            });
        }
    }
}
