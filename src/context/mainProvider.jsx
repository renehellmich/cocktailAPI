import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [drink, setDrink] = useState("")

    const api = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    useEffect(() => {
        const apiFetch = async () => {
        const resp = await axios.get(api)
        setDrink(resp)
        }
        apiFetch()
    }, [drink])

    return (
        <>
            <mainContext.Provider value={{drink, setDrink}}>
                {children}
            </mainContext.Provider>

        </>
    )
}

export default MainProvider