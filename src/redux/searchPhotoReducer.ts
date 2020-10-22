import {AppStateType, InferActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {unsplashPhotoApi} from '../api/api';
import {PhotoType} from '../types';

const SET_SEARCH_INPUT = 'SEARCH_PHOTO_REDUCER/SET_SEARCH_INPUT'

const initialState = {
    photoArray: [],
}

type InitialStateType = {
    photoArray: Array<PhotoType>,
}



export const searchPhotoReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_SEARCH_INPUT:
            debugger
            return {...state, photoArray: action.photoArray}

        default:
            return state
    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

const actions = {
    setSearchInput: (photoArray: Array<PhotoType>) => {
        return ({type: SET_SEARCH_INPUT, photoArray: photoArray} as const )
    }
}

export const searchInputThunk = (client_id: string, searchValue: string):ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {
    try {
        const response = await unsplashPhotoApi.setSearchInputValue(client_id, searchValue)
        debugger
        dispatch(actions.setSearchInput(response.data.results))
    }
    catch (e) {

    }
}
