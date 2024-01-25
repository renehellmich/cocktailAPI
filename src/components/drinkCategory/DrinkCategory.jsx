import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Cocktail from '../cocktail/Cocktail'
import Header from '../header/Header'
import './drinkcategory.css'


const DrinkCategory = () => {

    const { category } = useParams()

    const { setDrink, data, setApi, api } = useContext(mainContext)
    
    if(category == 'random') {
        setApi('https:www.thecocktaildb.com/api/json/v1/1/random.php')
    } else {
        setApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`)
    }
    setDrink(category)

    console.log(api);

    return (
        <>
            <Header />
            <main>
                {data.map((cocktail, index) => {
                    return (
                        <div key={index} className='divCocktail'>
                            <Cocktail
                                cocktailData={cocktail}
                            />
                        </div>
                    )
                })
                }
            </main>
        </>
    )
}

export default DrinkCategory