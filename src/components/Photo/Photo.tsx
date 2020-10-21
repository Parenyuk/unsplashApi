import React from 'react';

type PropsType = {
    photoLink: string
   /* key: string*/
}


export const Photo = ({photoLink}: PropsType) => {
    debugger
    return (
        <div>
            <img width={'300px'} height={'300px'} src={photoLink} />
        </div>
    )
}
