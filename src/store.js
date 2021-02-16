import { compose, applyMiddleware, createStore } from "redux";
import { createMiddleware } from 'redux-api-middleware';

import initReducers from './reducers';

const initialState = {};

const initStore = () => {
    const enhancers = [];
    if (window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const persistedState = localStorage.getItem('reduxState')
        ? JSON.parse(localStorage.getItem('reduxState'))
        : initialState

    const store =  createStore(
        initReducers(),
        persistedState,
        compose(applyMiddleware(createMiddleware()), ...enhancers)
    );
    store.subscribe(
        () => localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    );
    return store;
};

export default initStore;
