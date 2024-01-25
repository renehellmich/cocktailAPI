import { useParams } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom';

const Cocktail = ({ cocktailData }) => {
  console.log(cocktailData.strDrink);



  return (
    <>
      <Link to={`/drink/${cocktailData.strDrink}`} >
        <img src={cocktailData.strDrinkThumb} alt="" />
        <h2>{cocktailData.strDrink}</h2>
      </Link >

    </>
  )
}
export default Cocktail