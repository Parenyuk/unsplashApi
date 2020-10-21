import React, {useState} from 'react';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Photo} from '../../components/Photo/Photo';
import {searchInputThunk} from '../../redux/searchPhotoReducer';
import {PhotoType} from '../../types';


export const SearchPhoto = () => {

    const [searchValue, SetSearchValue] = useState<string>('')

    const dispatch = useDispatch();

    const photoArray = useSelector<AppStateType, Array<PhotoType>>(state => state.searchPhotoPage.photoArray);
    const _id = useSelector<AppStateType, string>(state => state.searchPhotoPage._id);

    const client_id = 'qfFiKdB-XkjSXyE2n3yyWvNpNWtsPbGfa6KVv7TEmvk';

    let dispatchThunk = () => {
        dispatch(searchInputThunk(client_id, searchValue))
    }

    debugger


    const photo = photoArray.map((m: PhotoType) => {
        debugger
        return <Photo /*key={m._id}*/ photoLink={m.results[0].urls.regular}/>
    })


    return (
        <div>
            Пошук фото
            <SearchInput searchValue={searchValue} SetSearchValue={SetSearchValue} dispatchThunk={dispatchThunk}/>
            {photo}
        </div>
    )
}
