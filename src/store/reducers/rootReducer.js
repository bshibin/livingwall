import productReducer from "./productReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    product: productReducer,
    firestore: firestoreReducer
});

export default rootReducer