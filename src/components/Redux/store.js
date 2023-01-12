import { createStore } from "redux";
import rootReducers from "./reducer";

let store = createStore(rootReducers)

export default store