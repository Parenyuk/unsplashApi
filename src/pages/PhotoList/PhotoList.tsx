import React from 'react';
import {PhotoData} from '../../components/PhotoData/PhotoData';
import './PhotoList.scss'

export const PhotoList = () => {
    return (
        <div className='photoList'>
            <PhotoData photoLink={'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}
                       authorName={'Ayo Ogunseinde'}
                       photoName={'girl'}
            />
            <PhotoData photoLink={'https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                       authorName={'Doruk Yemenici'} photoName={'horses'}
            />
            <PhotoData photoLink={'https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80'}
                       authorName={'Ross Sokolovski'} photoName={'duck'}/>
            <PhotoData photoLink={'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=981&q=80'}
                       authorName={'Rhys Moult'} photoName={'truck'}/>
            <PhotoData photoLink={'https://images.unsplash.com/photo-1532376413372-100a02226622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                       authorName={'Edgar Chaparro'} photoName={'ocean beach'}/>
            <PhotoData photoLink={'https://images.unsplash.com/photo-1579640979123-3e29bb3dd2aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80'}
                       authorName={'Andriyko Podilnyk'} photoName={'Dnipro'}/>
        </div>
    )
}
