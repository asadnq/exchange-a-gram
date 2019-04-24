import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(promise, thunk));

export default store;
