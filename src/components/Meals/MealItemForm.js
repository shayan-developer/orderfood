import React from 'react'
import { useStateValue } from '../Context/Store'
import Button from '../UI/Button'
import Input from '../UI/Input'

function MealItemForm(props) {
    const[state,dispath]=useStateValue()
    const addToCart=(e)=>{
        e.preventDefault()
        const amount=+e.target['0'].value
        dispath({
            type:"ADD",
            payload:{
                name:props.name,
                description:props.description,
                price:props.price,
                amount,
                id:props.id
            }
        })
    }
    return (
        <form onSubmit={addToCart} className="flex flex-col justify-center h-full">
            <Input
                label="Amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step:"1",
                    defaultValue: "1"
                }} 
                />
                <Button classes="w-full" type="submit" >+ Add</Button>
        </form>
    )
}

export default MealItemForm
