import React, { useEffect, useState } from 'react'
import { useStateValue } from '../Context/Store'
import Card from '../UI/Card'
import MealItem from './MealItem'
// const data = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ]
function AvailableMeals() {
    const [state, dispath] = useStateValue()
    console.log(state);
    const [isLoading, setisLoading] = useState(true)
    const [err, seterr] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://orderfood-cd15f-default-rtdb.firebaseio.com/meals.json")
            const data = await res.json();
            const array = []
            for (const key in data) {
                array.push({
                    id: key,
                    name: data[key].name,
                    price: data[key].price,
                    description: data[key].description,
                })
            }
            dispath({
                type: "ADD_MEALS",
                payload: array
            })
            setisLoading(false)
        }
        fetchData().catch(err=>console.log(err))
    }, [dispath])
    // if () {
        
    // }
    const meals = state.meals.map(meal => (
        <MealItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            description={meal.description}
            id={meal.id}
        />))
    return (
        <Card>
            {isLoading &&<p className="text-center font-bold ">Loading...</p>}
            {!isLoading&&meals}
        </Card>
    )
}

export default AvailableMeals
