import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { mainContext } from '../../context/mainProvider'
import './cocktailDetails.css'

const CocktailDetails = () => {

    const { idDrink } = useParams();
    console.log("hier ist id", idDrink);

    const { state, setState } = useContext(mainContext)


    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            drinkID: idDrink
        }))
    }, [idDrink, setState])


    return (<>


        {state.detailData ?
            (
                <>
                    <div className="cocktailDetail">
                        <div className="image">
                            <img src={state?.detailData[0]?.strDrinkThumb} alt="drink" />
                        </div>
                        <div className="details">
                            <h3>{state?.detailData[0]?.strDrink}</h3>
                            <h4>Ingredients:</h4>
                            <ul>{Array.from({ length: 15 }, (_, i) => (

                                state?.detailData[0]?.[`strIngredient${i + 1}`]
                                    ?
                                    <li key={i}>{state?.detailData[0]?.[`strIngredient${i + 1}`]}</li> : null
                            ))}</ul>
                            <p>{state?.detailData[0]?.strInstructionsDE}</p>


                        </div>


                    </div>
                </>
            )

            : (<p>...loading</p>)


        }




    </>);
}

export default CocktailDetails;