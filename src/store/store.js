import { legacy_createStore as createStore } from "redux";
// import { counterReducer } from "./reducers/counterReducer";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

export default store