import { createStore } from 'redux';
import initReducers from './Reducers';

function initStore() {
    const initialStore = {};

    return createStore(
        initReducers,
        initialStore,
    );
}

export default initStore;