import React from 'react'
import { useStateValue } from '../Context/Store'
import Button from '../UI/Button'

function CartItem(item) {
    const [, dispath] = useStateValue()

    const removeHandler = () => {
        dispath({
            type: "REMOVE",
            id: item.id
        })
    }
    const addHandler = () => {
        dispath({
            type: "ADD_CART",
                payload: {
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    amount: 1,
                    id: item.id
                }
        })
    }
    return (
        <div className="flex justify-between border-b-2 p-1">
            <div className="flex flex-col ">
                <h1 className="font-bold p-1 text-xl">{item.name}</h1>
                <div className="flex justify-between w-40 mt-3">
                    <span className="text-yellow-500 p-1 text-lg font-bold">${item.price}</span>
                    <span className="w-9 rounded h-8 border-2 flex justify-center items-center">
                        {`X${item.amount}`}
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <Button onClick={removeHandler} classes="mx-2"> - </Button>
                <Button onClick={addHandler}> + </Button>
            </div>
        </div>
    )
}

export default CartItem
