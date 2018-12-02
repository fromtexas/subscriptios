import { createStore, compose } from "redux";
import { subscriptionsReducer } from "../reducers";
import { initialState } from "../reducers/initialState";

function configureStoreProd() {
  return createStore(subscriptionsReducer, initialState);
}

function configureStoreDev() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(subscriptionsReducer, initialState, composeEnhancers());
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
