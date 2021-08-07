import React, { useRef, useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

const isEmpty = value => value.trim().length === ''
const isFive = value => value.trim().length === 5

function Checkout({ closeModal , onConfirm}) {
    const nameRef = useRef()
    const streetRef = useRef()
    const postalRef = useRef()
    const cityRef = useRef()
    const [form, setform] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    })

    const submitHandler = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;
        const validName = !isEmpty(name);
        const validStreet = !isEmpty(street);
        const validPostal = isFive(postal);
        const validCity = !isEmpty(city);
        setform({
            name:validName,
            street:validStreet,
            postal:validPostal,
            city:validCity
        })

        const formIsValid =
            validName &&
            validStreet &&
            validPostal &&
            validCity;
        if (!formIsValid) {
            return;
        }
        onConfirm({
            name,street,postal,city
        })
    }
    return (
        <form className="my-6 w-1/2 " onSubmit={submitHandler}>
            <Input ref={nameRef} label="Your name" input={{ id: "i1" }} />
            {!form.name && <p className="text-red-500 text-base">Enter valid Name !</p>}
            <Input ref={streetRef} label="Street" input={{ id: "i2" }} />
            {!form.street && <p className="text-red-500 text-base">Enter valid Street !</p>}
            <Input ref={postalRef} label="Postal code " input={{ id: "i3" }} />
            {!form.postal && <p className="text-red-500 text-base">Enter valid Posatl number !</p>}
            <Input ref={cityRef} label="City" input={{ id: "i4" }} />
            {!form.city && <p className="text-red-500 text-base">Enter valid City !</p>}
            <div className="mt-4">
                <Button type="submit " >Confirm</Button>
                <Button type="button " classes="mx-2" onClick={closeModal}>Cancel</Button>
            </div>
        </form>
    )
}

export default Checkout
