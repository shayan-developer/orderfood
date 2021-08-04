import React from 'react'
import MealItemForm from './MealItemForm'

function MealItem({ name, description, price }) {
    return (
        <div className="flex justify-between border-b-2 p-1">
            <div className="flex flex-col ">
                <h1 className="font-bold p-1 text-xl">{name}</h1>
                <p className="p-1 italic">{description}</p>
                <span className="text-yellow-500 p-1 text-lg font-bold">${price}</span>
            </div>
            <div>
                <MealItemForm />
            </div>
        </div>
    )
}

export default MealItem
