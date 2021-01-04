import { compose, createStore } from "redux";

import initReducers from './reducers';

const initStore = () => {
    const initialStore = {};
    const enhancers = window.devToolsExtension
        ? compose(window.devToolsExtension())
        : compose();
    return createStore(initReducers(), initialStore, enhancers);
};

export default initStore;
