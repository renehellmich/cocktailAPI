import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import DrinkCategory from './components/drinkCategory/DrinkCategory'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/:category' element={<DrinkCategory />}></Route>
      </Routes>
    </>
  )
}

export default App
