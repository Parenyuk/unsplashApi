import React, {useEffect} from 'react';
import {PhotoData} from '../../components/PhotoData/PhotoData';
import './PhotoList.scss'
import {useDispatch, useSelector} from 'react-redux';
import {setPhotoListThunk, setPhotoThunk} from '../../redux/photoReducer';
import {AppStateType} from '../../redux/store';

export const PhotoList = () => {

    const dispatch = useDispatch();
    const photoName = useSelector<AppStateType, string>(state => state.bigPhotoPage.photoName);
    const author = useSelector<AppStateType, string>(state => state.bigPhotoPage.author);
    const photoLink = useSelector<AppStateType, string>(state => state.bigPhotoPage.photoLink);


   const client_id = 'qfFiKdB-XkjSXyE2n3yyWvNpNWtsPbGfa6KVv7TEmvk';
    const count = 6;

    useEffect(
        () => {
            dispatch(setPhotoListThunk(client_id, count))
        }, [dispatch])
    const getPhoto = () => {
        debugger;
        dispatch(setPhotoThunk());
    }

    return (
        <div className='photoList'>
            <button onClick={getPhoto} >Get Random Photo</button>
            <PhotoData photoLink={photoLink} author={author} photoName={photoName}/>
            <PhotoData photoLink={photoLink} author={author} photoName={photoName}/>
            <PhotoData photoLink={photoLink} author={author} photoName={photoName}/>
        </div>
    )
}
