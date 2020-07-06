import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { productListReducer } from "./reducers/productReducers";
import thunk from "redux-thunk";

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
