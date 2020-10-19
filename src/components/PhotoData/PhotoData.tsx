import React from 'react';
import './PhotoData.scss'

type PropsType = {
    photoLink: string
    authorName: string
    photoName: string
}

export const PhotoData = ({photoLink, authorName, photoName}: PropsType) => {
    return (
        <div className='photo'>
            <img src={photoLink} width={'270px'} height={'260px'} />
            <div>
             author:   <b>{authorName}</b>
            </div>
            <div>
             name: <b>{photoName}</b>
            </div>

        </div>
    )
}
