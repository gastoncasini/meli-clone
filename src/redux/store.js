import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import user, { doRestoreSessionAction } from "./userDuck";
import products, { fetchProductsAction } from "./productsDuck";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  user,
  products
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  doRestoreSessionAction()(store.dispatch);

  return store;
}
