import React from 'react'
import Button from '../UI/Button'
import Modal from '../UI/Modal'

function Cart({onHideModal}) {
    return (
        <Modal onClose={onHideModal}>
            //items
            <div className="flex justify-between items-center my-4">
                <span className="font-bold text-3xl">Total amount </span>
                <span className="text-2xl"> $32</span>
            </div>
            <div>
                <Button onClick={onHideModal} classes="mx-2"> Close</Button>
                <Button classes="mx-2"> Order </Button>
            </div>
        </Modal>
    )
}

export default Cart
