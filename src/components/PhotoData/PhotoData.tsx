import React, {useEffect} from 'react';
import './PhotoData.scss'
import {setPhotoListThunk, setPhotoThunk} from '../../redux/photoReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';


export const PhotoData = () => {

    const photoName = useSelector<AppStateType, string>(state => state.bigPhotoPage.photoName);
    const author = useSelector<AppStateType, string>(state => state.bigPhotoPage.author);
    const photoLink = useSelector<AppStateType, string>(state => state.bigPhotoPage.photoLink);

    const dispatch = useDispatch();


    const client_id = 'qfFiKdB-XkjSXyE2n3yyWvNpNWtsPbGfa6KVv7TEmvk';
    const count = 6;

    useEffect(
        () => {
            dispatch(setPhotoListThunk(client_id, count))
        },[dispatch])
    const getPhotos = () => {
        debugger;
        dispatch(setPhotoListThunk(client_id, count));
    }


    return (
        <div className='photo'>
            <img src={photoLink} width={'270px'} height={'260px'} />
            <div>
             author:   <b>{author}</b>
            </div>
            <div>
             name: <b>{photoName}</b>
            </div>

        </div>
    )
}
