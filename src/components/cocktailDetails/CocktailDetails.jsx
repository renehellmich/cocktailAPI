import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { mainContext } from '../../context/mainProvider'

const CocktailDetails = () => {

    const { title } = useParams();
    console.log("hei aici este", title);

    const { drink, setDrink, data } = useContext(mainContext)

    useEffect(() => {
        const filterdCocktail = data.filter((cocktail) => {
            return cocktail.strDrink === title.toString()

        })
        setData(filterdCocktail)
    }, [drink])

    console.log(filterdCocktail);



    return (<>

        <p>hei asta e pagina</p>
        {drink
            ? (
                <><img src={filterdCocktail.strDrinkThumb} alt="" />
                    <h2>{filterdCocktail.strDrink}</h2></>)
            : (<p>...loading</p>)
        }



    </>);
}

export default CocktailDetails;