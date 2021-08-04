import React from 'react'

function Input({label,input}) {
    return (
        <div className="my-3">
            <label htmlFor={input.id}>{label}</label>
            <input className="bg-gray-200 mx-2 px-1 text-pink-600 rounded" {...input}/>
        </div>
    )
}

export default Input
