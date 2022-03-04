import thunk from "redux-thunk";
import { Action, applyMiddleware, createStore } from "redux";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// export store type
export type IStoreState = ReturnType<typeof store.getState>;

// export dispatch type
export type AppDispatch = ThunkDispatch<IStoreState, void, Action>;
// export custom useDispatch for store
export const useAppDispatch = () => useDispatch<AppDispatch>();
