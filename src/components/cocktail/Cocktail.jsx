import { useParams } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import CocktailDetails from '../cocktailDetails/CocktailDetails';

const Cocktail = ({ cocktailData }) => {
    // console.log(cocktailData);

    const [modal, setModal] = useState(false);

    const { idDrink } = useParams();
    console.log("hier ist id", cocktailData.idDrink);

    return (
        <>
            <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} onClick={() => setModal(true)} />
            <h2 onClick={() => setModal(true)}>{cocktailData.strDrink}</h2>

            {/* das war vorher
            <Link to={`/drink/${cocktailData.idDrink}`} >
                <img src={cocktailData.strDrinkThumb} alt="" />
                <h2>{cocktailData.strDrink}</h2>
            </Link > */}

            <PureModal
                isOpen={modal}
                width="80%"
                closeButton="X"
                closeButtonPosition="header"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
            >
                <CocktailDetails idDrinktoGibWeiter={cocktailData.idDrink} />
            </PureModal>




        </>
    )

}
export default Cocktail