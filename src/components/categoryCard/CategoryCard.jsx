import React from 'react'
import './categorycard.css'

const CategoryCard = ({ title, text }) => {
    return (
        <>
            <div className={`divCategoryCard ${title}`}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default CategoryCard