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
        backupData: [],
        api: '',
        searchValue: ''
    })

    useEffect(() => {

        if (state.drink == 'random') {
            setState((prevState) => ({
                ...prevState,
                api: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            }))
            // setApi('https:www.thecocktaildb.com/api/json/v1/1/random.php')
        } else {
            console.log('Drink:', state.drink);
            setState((prevState) => ({
                ...prevState,
                api: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.drink}`
            }))
            console.log('API', state.api);
            // setApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        }

        const apiFetch = async () => {
            const resp = await axios.get(state.api)
            console.log('Api', state.api)
            console.log('Zeile 44', resp)
            setState((prevState) => ({
                ...prevState,
                data: resp.data.drinks
            }))
            // setData(resp.data.drinks)
        }
        apiFetch()
        console.log('State im useEffect', state);
    }, [state.drink])

    state.searchValue ? (<>{

        useEffect(() => {

            setState((prevState) => ({
                ...prevState,
                api: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${state.searchValue}`
            }))
            // setApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`)

            const apiFetch = async () => {
                const resp = await axios.get(state.api)
                setState((prevState) => ({
                    ...prevState,
                    data: resp.data.drinks
                }))
                // setData(resp.data.drinks)
            }
            apiFetch()
        }, [state.searchValue])
    }</>) : (null)

    console.log('State: ', state);
    return (
        <>
            {/* value={{ drink, setDrink, data, setData, api, setApi, searchValue, setSearchValue }} */}
            <mainContext.Provider value={{ state, setState }}>
                {children}
            </mainContext.Provider>

        </>
    )
}

export default MainProvider