import { compose, applyMiddleware, createStore } from "redux";
import { createMiddleware } from 'redux-api-middleware';

import initReducers from './reducers';

const initialStore = {};

const initStore = () => {
    const enhancers = [];
    if (window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    return createStore(
        initReducers(),
        initialStore,
        compose(applyMiddleware(createMiddleware()), ...enhancers)
    );
};

export default initStore;
