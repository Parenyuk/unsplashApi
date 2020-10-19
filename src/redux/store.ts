import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {listPhotoReducer} from './listPageReducer';



export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;


const rootReducer = combineReducers(
    { listPhotoPage: listPhotoReducer

    }

)
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;


const store = createStore(rootReducer, applyMiddleware(thunk));
