import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

function MealItemForm() {
    return (
        <form className="flex flex-col justify-center h-full">
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
                <Button classes="w-full">+ Add</Button>
        </form>
    )
}

export default MealItemForm
