import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { mainContext } from '../../context/mainProvider'
import './cocktailDetails.css'

const CocktailDetails = () => {

    const { title } = useParams();
    console.log("hier ist title", title);


    const { drink, setDrink, data } = useContext(mainContext)

    // useEffect(() => {
    //     const filterdCocktail = data.filter((cocktail) => {
    //         return cocktail.strDrink === title.toString()

    //     })
    //     setData(filterdCocktail)
    // }, [drink])

    // console.log(filterdCocktail);



    return (<>
        <div className="cocktailDetail">
            <p>hei heir ist die seite</p>
            <p>{title}</p>

            {/* {drink
            ? (
                <><img src={filterdCocktail.strDrinkThumb} alt="" />
                    <h2>{filterdCocktail.strDrink}</h2></>)
            : (<p>...loading</p>)
        } */}


        </div>
    </>);
}

export default CocktailDetails;