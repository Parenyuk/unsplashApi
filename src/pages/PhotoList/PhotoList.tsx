import React from 'react';
import {PhotoData} from '../../components/PhotoData/PhotoData';
import './PhotoList.scss'

export const PhotoList = () => {
    return (
        <div className='photoList'>
            <button onClick={getPhotos} >Загрузити нові фото</button>
            <PhotoData />
            <PhotoData />
            <PhotoData />
            <PhotoData />
            <PhotoData />
            <PhotoData />
        </div>
    )
}
