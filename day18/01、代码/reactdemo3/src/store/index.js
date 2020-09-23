import { createStore } from "redux";

import reudcer from "./reducer"

let store = createStore(reudcer);
window.store = store;

export default store;