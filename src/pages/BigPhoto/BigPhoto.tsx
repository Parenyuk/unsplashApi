import React from 'react';

type PropsType = {
    photoLink: string
    authorName: string
    photoName: string
}

export const BigPhoto = ({photoLink, authorName, photoName}: PropsType) => {
    return (
        <div className='bigPhoto'>

            <div>
                author:   <b>{authorName}</b>
            </div>
            <div>
                name: <b>{photoName}</b>
            </div>
            <img src={photoLink} width={'600px'} height={'500px'} />
        </div>
    )
}
