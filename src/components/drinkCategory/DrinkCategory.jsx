import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Cocktail from '../cocktail/Cocktail'
import Header from '../header/Header'
import './drinkcategory.css'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'


const DrinkCategory = () => {

    const { category } = useParams()

    const { setDrink, data } = useContext(mainContext)

    // const sendApi = async () => {
    //     if(category === 'random') {
    //         await setApi('https:www.thecocktaildb.com/api/json/v1/1/random.php')
    //     } else {
    //         await setApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`)
    //     }
    // }
    setDrink(category)

    // console.log(api);

    return (
        <>
            <header>
                <NavBar />
                <Header />
            </header>

            <main>
                {data.map((cocktail, index) => {
                    let colorClass
                    index % 6 == 0
                        ? (colorClass = 'sixed')
                        : index % 5 == 0
                            ? (colorClass = 'fifth')
                            : index % 4 == 0
                                ? (colorClass = 'fourth')
                                : index % 3 == 0
                                    ? (colorClass = 'third')
                                    : index % 2 == 0
                                        ? (colorClass = 'second')
                                        : (colorClass = 'first')
                    return (
                        <div key={index} className={`divCocktail ${colorClass}`}>
                            <Cocktail
                                cocktailData={cocktail}
                            />
                        </div>
                    )
                })
                }
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DrinkCategory