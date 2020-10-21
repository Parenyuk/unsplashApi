import {InferActionTypes, AppStateType} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {unsplashPhotoApi} from '../api/api';

const SET_PHOTO = 'PHOTO_REDUCER/SET-PHOTO'

let initialState = {
    photoName: 'photo',
    author: 'Vasia',
    photoLink: 'https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
}

type InitialStateType = typeof initialState;


export const photoReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType  => {
    switch (action.type) {
        case SET_PHOTO: {
            return {...state, photoName: action.data.alt_description, author: action.data.user.username, photoLink: action.data.urls.regular }
        }
        default:
            return state
    }
}
type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

type DataType = {
    photoName: string
    author: string
    photoLink: string
}


const actions = {
    setPhoto: (data: any) => {
        return ({type: SET_PHOTO, data } as const )
    }
}


export const setPhotoThunk = ():ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {
    let client_id = 'qfFiKdB-XkjSXyE2n3yyWvNpNWtsPbGfa6KVv7TEmvk';
    try {
        debugger
        const response = await unsplashPhotoApi.setPhotoData(client_id)
        dispatch(actions.setPhoto(response.data))
    }
    catch (e) {

    }
}
