import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type IStoreState = ReturnType<typeof store.getState>;
