import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem'
const data = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
]
function AvailableMeals() {
    const meals = data.map(meal => (
        <MealItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            description={meal.description}
        />))
    return (
        <Card>
            {meals}
        </Card>
    )
}

export default AvailableMeals
