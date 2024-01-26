import { useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import DrinkCategory from './components/drinkCategory/DrinkCategory'
import CocktailDetails from './components/cocktailDetails/CocktailDetails'

function App() {
  const { category } = useParams()
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/:category' element={<DrinkCategory />}></Route>
        <Route path={`/drink/:title`} element={<CocktailDetails />}></Route>
      </Routes >
    </>
  )
}

export default App
