import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Cocktail from '../cocktail/Cocktail'
import Header from '../header/Header'
import './drinkcategory.css'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import SearchBar from '../searchBar/SearchBar'


const DrinkCategory = () => {

    const { category } = useParams()
    const { state, setState } = useContext(mainContext)

    // console.log(category,state.drink);
    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            drink: category
        }))
    }, [category, setState])

    return (
        <>
            <header>
                <NavBar />
                <Header />
                <SearchBar />
            </header>

            <main>
                {
                    state.data ?
                    (
                        <>
                        {state.data.map((cocktail, index) => {
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
                        </>
                    )
                    :(<p>Loading....</p>)
                }
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DrinkCategory