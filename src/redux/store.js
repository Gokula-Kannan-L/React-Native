import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers';
import productSaga from './productSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

const rootReducer = combineReducers({userReducer});

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));
// export const Store = createStore(rootReducer, applyMiddleware(thunk));

sagaMiddleware.run(productSaga);
