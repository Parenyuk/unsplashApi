import React from 'react';

type PropsType = {
    photoLink: string
    key: string
}


export const Photo = ({photoLink, key}: PropsType) => {
    debugger
    return (
        <div key={key}>
            <img width={'300px'} height={'300px'} src={photoLink} />
        </div>
    )
}
