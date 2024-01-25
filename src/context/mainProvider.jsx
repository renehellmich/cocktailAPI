import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [drink, setDrink] = useState('')
    const [data, setData] = useState(null)

    let api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(api)
            setData(resp)
        }
        apiFetch()
    }, [drink])

    console.log(data);
    return (
        <>
            <mainContext.Provider value={{ drink, setDrink, data, setData }}>
                {children}
            </mainContext.Provider>

        </>
    )
}

export default MainProvider