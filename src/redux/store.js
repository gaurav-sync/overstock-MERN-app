import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, createComposer(applyMiddleware(thunk)));

export { store };