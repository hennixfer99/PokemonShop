import { legacy_createStore as createStore, combineReducers } from "redux"
import carrinhoReducer from "./modules/reducer"

const reducers = combineReducers({carrinhoReducer})

const store = createStore(reducers)

export default store