import {createStore} from 'redux';

import reducers from './Reducers';

export default function initStore() {
    return createStore(reducers, {});
};