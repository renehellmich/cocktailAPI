import React, { useContext, useRef } from 'react'
import { mainContext } from '../../context/mainProvider'

const SearchBar = () => {

    const { state, setState} = useContext(mainContext)
    const searchRef = useRef()

    
    const getSearchValue = () => {
        console.log(searchRef);
        setState((prevState) => ({
            ...prevState,
            searchValue: searchRef.current.value
        }))
        console.log(state);
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