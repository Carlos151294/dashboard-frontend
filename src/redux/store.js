import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const enhancers = [];
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), ...enhancers));

export { store };