import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(thunk)) //peticiones externas a api a un server
); //petisiones asincronas

export default store;

