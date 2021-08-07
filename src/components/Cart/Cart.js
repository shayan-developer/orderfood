import React, { useState } from 'react'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { useStateValue } from '../Context/Store'
import CartItem from './CartItem'
import Checkout from './Checkout'
function Cart({ onHideModal }) {
    const [state] = useStateValue()
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [didSubmited, setDidSubmited] = useState(false)
    const [showCheckout, setshowCheckout] = useState(false)
    const total = `$${Math.abs(state.total.toFixed(2))}`
    const items = state.cart.map((item) => <CartItem key={item.id} {...item} />)
    const orderHandler = () => { setshowCheckout(true) }
    const postData = async (data) => {
        setIsSubmiting(true)
        const res = await fetch("https://orderfood-cd15f-default-rtdb.firebaseio.com/order.json", {
            method: "POST",
            body: JSON.stringify({
                user: data,
                orders: state.cart
            })
        })
        setIsSubmiting(false)
        setDidSubmited(true)
    }

    const modalContent = (
        <>
            <div className="max-h-80 overflow-auto">
                {items}
            </div>
            <div className="flex justify-between items-center my-4">
                <span className="font-bold text-3xl">Total amount </span>
                <span className="text-2xl font-bold"> {total}</span>
            </div>
            {showCheckout && <Checkout onConfirm={postData} closeModal={onHideModal} />}
            {!showCheckout && <div>
                <Button onClick={onHideModal} classes="mx-2"> Close</Button>
                {state.cart.length > 0 && <Button onClick={orderHandler} classes="mx-2"> Order </Button>}
            </div>}
        </>
    )
    const isSubmitingMedia = <p>Sending order data...</p>;
    const didsubmitedMedia = (
        <>
            <p>Successfully sent the order!</p>
            <div className="my-2">
                <Button onClick={onHideModal}>
                    Close
                </Button>
            </div>
        </>
    )
    return (
        <Modal onClose={onHideModal}>
            {!isSubmiting && !didSubmited && modalContent}
            {isSubmiting && isSubmitingMedia}
            {!isSubmiting && didSubmited && didsubmitedMedia}
        </Modal>
    )
}

export default Cart
