import React, { useContext, useRef } from 'react'
import { mainContext } from '../../context/mainProvider'

const SearchBar = () => {

    const { state, setState } = useContext(mainContext)
    const searchRef = useRef()

    const getSearchValue = () => {
        setState((prevState) => ({
            ...prevState,
            searchValue: searchRef.current.value.toLowerCase().charAt(0)
        }))
    }

    return (
        <>
            <input
                type="text"
                ref={searchRef}
            />
            <button onClick={getSearchValue}>Search</button>

        </>
    )
}

export default SearchBar