import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/reducers'

const store = createStore(rootReducer);

export default store;