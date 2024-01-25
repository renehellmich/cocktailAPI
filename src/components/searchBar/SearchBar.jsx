import React, { useContext, useRef } from 'react'
import { mainContext } from '../../context/mainProvider'

const SearchBar = () => {

    const { data, setSearchValue } = useContext(mainContext)
    const searchRef = useRef()

    const getSearchValue = () => {
        setSearchValue(searchRef)
    }

    return (
        <>

            <input type="text"
                ref={searchRef}
            />
            <button onClick={getSearchValue}>Search</button>

        </>
    )
}

export default SearchBar