import React, { useState } from 'react'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { useStateValue } from '../Context/Store'
import CartItem from './CartItem'
import Checkout from './Checkout'
function Cart({ onHideModal }) {
    const [state] = useStateValue()
    const [showCheckout, setshowCheckout] = useState(false)
    const total = `$${Math.abs(state.total.toFixed(2))}`
    const items = state.cart.map((item) => <CartItem key={item.id} {...item} />)
    const orderHandler = () => { setshowCheckout(true) }
    return (
        <Modal onClose={onHideModal}>
            <div className="max-h-80 overflow-auto">
                {items}
            </div>
            <div className="flex justify-between items-center my-4">
                <span className="font-bold text-3xl">Total amount </span>
                <span className="text-2xl font-bold"> {total}</span>
            </div>
            {showCheckout && <Checkout closeModal={onHideModal}/>}
            {!showCheckout && <div>
                <Button onClick={onHideModal} classes="mx-2"> Close</Button>
                {state.cart.length > 0 && <Button onClick={orderHandler} classes="mx-2"> Order </Button>}
            </div>}
        </Modal>
    )
}

export default Cart
