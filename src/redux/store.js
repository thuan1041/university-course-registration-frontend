import rootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux'

const store = createStore(rootReducer);
try {
} catch (error) {

}

export default store;