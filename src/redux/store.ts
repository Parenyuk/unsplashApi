import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {photoReducer} from './photoReducer';
import { searchPhotoReducer } from "./searchPhotoReducer";



export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;


const rootReducer = combineReducers(
    {
        bigPhotoPage: photoReducer,
        searchPhotoPage: searchPhotoReducer

    }
)
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

// export type PhotoReducerType = ReturnType<typeof photoReducer>


export const store = createStore(rootReducer, applyMiddleware(thunk));
