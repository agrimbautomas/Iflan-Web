/* eslint-disable */
import { createStore } from 'redux';

const emptyStore = (state = 0, action) => {
    return null;
}
export const store = createStore(emptyStore);

