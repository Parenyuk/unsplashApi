import {InferActionTypes, AppStateType} from './store';
import {ThunkAction} from 'redux-thunk';
import {Dispatch} from 'redux';

const SET_PHOTO = 'LIST_PHOTO_REDUCER/SET-PHOTO'

let initialState = {
    photoName: '',
    author: '',
    photoLink: ''
}

type InitialStateType = typeof initialState

export const listPhotoReducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
        case SET_PHOTO: {
            return {...state, }
        }
        default:
            return state
    }
}
type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;


const actions = {
        setPhoto: () => {
return ({type: SET_PHOTO} as const )
        }
}


// export type setPhotoThunk = () => async (dispatch: Dispatch<ActionType> ) => {
//     try {
//         await
//
//     }
//     catch (e) {
//
//     }
//
// }
