import {createStore} from "redux";
import reducers from "../reducer/Reducer";

const store=createStore(reducers)

export default store;