import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

function Checkout({ closeModal }) {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form className="my-6 " onSubmit={submitHandler}>
            <Input label="Your name" input={{ id: "i1" }} />
            <Input label="Street" input={{ id: "i2" }} />
            <Input label="Postal code " input={{ id: "i3" }} />
            <Input label="City" input={{ id: "i4" }} />
            <div >
                <Button type="submit " >Confirm</Button>
                <Button type="button "classes="mx-2" onClick={closeModal}>Cancel</Button>
            </div>
        </form>
    )
}

export default Checkout
