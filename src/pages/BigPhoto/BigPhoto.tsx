import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import { setPhotoThunk } from '../../redux/photoReducer';





export const BigPhoto = () => {


    const dispatch = useDispatch();


    const photoName = useSelector<AppStateType, string>(state => state.bigPhotoPage.photoName);
    const author = useSelector<AppStateType, string>(state => state.bigPhotoPage.author);
    const photoLink = useSelector<AppStateType, string>(state => state.bigPhotoPage.photoLink);



    const getPhoto = () => {
        debugger;
        dispatch(setPhotoThunk());
    }




    return (
        <div className='bigPhoto'>
            <button onClick={getPhoto} >Get Random Photo</button>

            <div>
                author:   <b>{author}</b>
            </div>
            <div>
                name: <b>{photoName}</b>
            </div>
            <img src={photoLink} width={'600px'} height={'500px'} />
        </div>
    )
}
