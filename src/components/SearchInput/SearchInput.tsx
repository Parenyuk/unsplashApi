import React, {ChangeEvent} from 'react';

type PropsType = {
    searchValue: string
    SetSearchValue: (s: string) => void
    dispatchThunk: () => void
}

export const SearchInput = ({searchValue, SetSearchValue, dispatchThunk}: PropsType) => {
    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        SetSearchValue(e.currentTarget.value)
    }

    return (
        <div>
          <input placeholder={'пошук фото'} value={searchValue} onChange={changeSearchValue}   />
          <button onClick={dispatchThunk} >Пошук</button>

        </div>
    )
}
