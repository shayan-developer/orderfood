import React, { useRef, useState } from 'react'
import { useStateValue } from '../Context/Store'
import Button from '../UI/Button'
import Input from '../UI/Input'

function MealItemForm(props) {
    const [, dispath] = useStateValue()
    const amountNum = useRef()
    const [validAmount, setvalidAmount] = useState(true)
    const addToCart = (e) => {
        e.preventDefault()
        const amountNumber = +amountNum.current.value
        if (amountNumber === 0 || amountNumber < 1 || amountNumber > 5) {
            setvalidAmount(false)
            return;
        }
        dispath({
            type: "ADD_CART",
            payload: {
                name: props.name,
                description: props.description,
                price: props.price,
                amount: amountNumber,
                id: props.id
            }
        })
    }
    return (
        <form onSubmit={addToCart} className="flex flex-col justify-center h-full">
            <Input
                label="Amount"
                ref={amountNum}
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}
            />
            <Button classes="w-full" type="submit" >+ Add</Button>
            {!validAmount && <p className="text-red-500 text-base">Amount must between 1 and 5 </p>}
        </form>
    )
}

export default MealItemForm
