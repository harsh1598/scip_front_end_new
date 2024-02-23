import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { getFormLayoutHeading } from "../Reducer/AuthReducer";

const reducers = combineReducers({
    formLayoutHeading: getFormLayoutHeading,

})

const initialState = {}

const middleware = [thunk]

const store = legacy_createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

export type RootState = ReturnType<typeof store.getState>