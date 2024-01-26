import React, { useContext } from 'react'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import './landingpage.css'
import { Link } from 'react-router-dom'
import DrinkCategory from '../../components/drinkCategory/DrinkCategory'

const LandingPage = () => {

    return (
        <>
            <header>
                <NavBar />
                <Header />
            </header>
            <main>
                <Link to={`/gin`}>
                    <CategoryCard
                        title={'Gin'}
                        text={'Lorem ipsum dolor sit amet'}
                    />
                </Link>
                <Link to={`/vodka`}>
                    <CategoryCard
                        title={'Vodka'}
                        text={'consectetur adipisicing elit'}
                    />
                </Link>
                <Link to={`/rum`}>
                    <CategoryCard
                        title={'Rum'}
                        text={'Omnis earum architecto'}
                    />
                </Link>
                <Link to={`/scotch`}>
                    <CategoryCard
                        title={'Scotch'}
                        text={'blanditiis natus, itaque vero excepturi'}
                    />
                </Link>
                <Link to={`/free`}>
                    <CategoryCard
                        title={'Alkoholfrei'}
                        text={'voluptatibus odio porro et'}
                    />
                </Link>
                <Link to={`/random`}>
                    <CategoryCard
                        title={'Zufall'}
                        text={'Lorem ipsum dolor'}
                    />
                </Link>
            </main>
            {/* <footer> das habe ich direct in der componente zinzugefügt */}
            <Footer />
            {/* </footer> */}
        </>
    )
}

export default LandingPage