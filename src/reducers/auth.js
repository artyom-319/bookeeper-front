import update from 'react-addons-update';

const initialState = {
    isAuthenticated: false,
    username: '',
};

const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export default function authReducer(store = initialState, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return update(store, {
                isAuthenticated: { $set: true },
                username: { $set: action.payload.username },
            });
    }
}
