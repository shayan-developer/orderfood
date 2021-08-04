import React from 'react'
import foodimage from "../../assets/food.jpg"
import Button from '../UI/Button'
import CartIcon from "../UI/CartIcon"
function Header() {
    return (
        <>
            <header className="w-full flex justify-between p-3 bg-pink-500 text-white">
                <h1 className="text-2xl">Food Order</h1>
                <div className="flex w-44 items-center justify-between">
                    <Button classes="flex-1 h-full">
                        Your cart
                    </Button>
                    <div className="flex mx-2">
                        <span className="w-8 ">
                        <CartIcon />
                        </span>
                        <span className="mx-2 text-lg font-bold">0</span>
                    </div>
                </div>
            </header>
            <div className=" shape w-full overflow-hidden">
                <img src={foodimage} alt="food" className="w-full" />
            </div>

        </>
    )
}

export default Header
