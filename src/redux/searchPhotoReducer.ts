import {AppStateType, InferActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {unsplashPhotoApi} from '../api/api';
import {PhotoType} from '../types';

const SET_SEARCH_INPUT = 'SEARCH_PHOTO_REDUCER/SET_SEARCH_INPUT'

const initialState = {
    photoLinks: [],
    _id: ''
}

type InitialStateType = {
    photoLinks: Array<string>,
    _id: string
}


// type InitialStateType = typeof initialState;

export const searchPhotoReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_SEARCH_INPUT: {
            return {...state, photoLinks: action.link, _id: action._id }
        }
        default:
            return state
    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

const actions = {
    setSearchInput: (link: string, _id: string) => {
        return ({type: SET_SEARCH_INPUT, link, _id } as const )
    }
}

export const searchInputThunk = (client_id: string, searchValue: string):ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {
    try {
        const response = await unsplashPhotoApi.setSearchInputValue(client_id, searchValue)
        debugger
        dispatch(actions.setSearchInput(response.data.results, response.data.results[0].user.id))
    }
    catch (e) {

    }
}
