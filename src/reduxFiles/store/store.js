import { createStore } from 'redux';
import todo from '../reducer/reducer'

const store =createStore(
    todo ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// console.log('initialState',store.getState())

export default store;
