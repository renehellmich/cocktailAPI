import { useParams } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom';

const Cocktail = ({ cocktailData }) => {
    console.log(cocktailData);
    return (
        <>
            <Link to={`/drink/${cocktailData.idDrink}`} >
                <img src={cocktailData.strDrinkThumb} alt="" />
            </Link >
                <h2>{cocktailData.strDrink}</h2>
        </>
    )

}
export default Cocktail