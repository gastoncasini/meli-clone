import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import user from "./userDuck";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  user
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
