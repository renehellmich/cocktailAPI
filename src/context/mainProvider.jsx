import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [drink, setDrink] = useState('')
    const [data, setData] = useState(null)
    const [api, setApi] = useState('')
    
    useEffect(() => {

        if(drink === 'random') {
            setApi('https:www.thecocktaildb.com/api/json/v1/1/random.php')
        } else {
            setApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        }

        const apiFetch = async () => {
            const resp = await axios.get(api)
            setData(resp.data.drinks)
        }
        apiFetch()
    }, [drink, api])

    console.log(data);
    return (
        <>
            <mainContext.Provider value={{ drink, setDrink, data, setData, api, setApi }}>
                {children}
            </mainContext.Provider>

        </>
    )
}

export default MainProvider