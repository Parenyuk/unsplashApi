import React from 'react';
import './PhotoData.scss'

type PropsType = {
    photoLink: string
    author: string
    photoName: string
}

export const PhotoData = ({photoLink, author, photoName}: PropsType) => {


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
