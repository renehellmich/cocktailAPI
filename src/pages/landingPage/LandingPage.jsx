import React, { useContext } from 'react'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import './landingpage.css'

const LandingPage = () => {

    return (
        <>
            <header>
                <NavBar />
                <Header />
            </header>
            <main>
                <CategoryCard
                    title={'Gin'}
                    text={'Lorem ipsum dolor sit amet'}
                />
                <CategoryCard
                    title={'Vodka'}
                    text={'consectetur adipisicing elit'}
                />
                <CategoryCard
                    title={'Rum'}
                    text={'Omnis earum architecto'}
                />
                <CategoryCard
                    title={'Scotch'}
                    text={'blanditiis natus, itaque vero excepturi'}
                />
                <CategoryCard
                    title={'Alkoholfrei'}
                    text={'voluptatibus odio porro et'}
                />
                <CategoryCard
                    title={'Zufall'}
                    text={'Lorem ipsum dolor'}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default LandingPage