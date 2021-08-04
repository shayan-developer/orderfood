import React from 'react'
import MealItemForm from './MealItemForm'

function MealItem(props) {
    return (
        <div className="flex justify-between border-b-2 p-1">
            <div className="flex flex-col ">
                <h1 className="font-bold p-1 text-xl">{props.name}</h1>
                <p className="p-1 italic">{props.description}</p>
                <span className="text-yellow-500 p-1 text-lg font-bold">${props.price}</span>
            </div>
            <div>
                <MealItemForm {...props}/>
            </div>
        </div>
    )
}

export default MealItem
