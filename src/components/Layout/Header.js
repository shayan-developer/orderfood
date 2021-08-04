import React from 'react'
import foodimage from "../../assets/food.jpg"
import Button from '../UI/Button'
function Header() {
    return (
        <>
            <header className="w-full flex justify-between p-3 bg-pink-500 text-white">
                <h1 className="text-2xl">Food Order</h1>
                <Button>Card</Button>
            </header>
            <div>
                <img src={foodimage} alt="food" className="w-full h-auto" />
            </div>

        </>
    )
}

export default Header
