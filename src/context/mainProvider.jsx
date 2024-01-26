import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    /*
    const [drink, setDrink] = useState('')
    const [data, setData] = useState(null)
    const [backupData, setBackupData] = useState(null)
    const [api, setApi] = useState('')
    const [searchValue, setSearchValue] = useState('')
    */

    const [state, setState] = useState({
        drink: '',
        data: [],
        detailData: [],
        api: '',
        apiDetail: '',
        searchValue: '',
        drinkID: ''
    })

    useEffect(() => {
        if (state.drink == 'random') {
            setState((prevState) => ({
                ...prevState,
                api: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            }))
        } else {
            setState((prevState) => ({
                ...prevState,
                api: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.drink}`
            }))
        }

    }, [state.drink])

    useEffect(() => {
        const apiFetch = async () => {
            // console.log(state.api);
            const resp = await axios.get(state.api)
            setState((prevState) => ({
                ...prevState,
                data: resp.data.drinks
            }))
        }
        state.api ? (apiFetch()) : (null)

    }, [state.api])

    useEffect(() => {
        if(state.searchValue) {
            setState((prevState) => ({
                ...prevState,
                api: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${state.searchValue}`
            }))
        } else {null}

    }, [state.searchValue])

    useEffect(() => {
        if(state.drinkID) {
            setState((prevState) => ({
                ...prevState,
                apiDetail: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${state.drinkID}`
            }))
        }
    }, [state.drinkID])

    useEffect(() => {
        const apiFetch = async () => {
            // console.log(state.api);
            const resp = await axios.get(state.apiDetail)
            setState((prevState) => ({
                ...prevState,
                detailData: resp.data.drinks
            }))
        }
        state.apiDetail ? (apiFetch()) : (null)

    }, [state.apiDetail])

    return (
        <>
            <mainContext.Provider value={{ state, setState }}>
                {children}
            </mainContext.Provider>

        </>
    )
}

export default MainProvider