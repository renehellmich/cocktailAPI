import React from 'react'

const Cocktail = ({cocktailData}) => {
    console.log(cocktailData.strDrink);
  return (
    <>
        <img src={cocktailData.strDrinkThumb} alt="" />
        <h2>{cocktailData.strDrink}</h2>
    </>
  )
}

export default Cocktail