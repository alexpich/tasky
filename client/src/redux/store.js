import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  applyMiddleware(),
  composeWithDevTools()
);
