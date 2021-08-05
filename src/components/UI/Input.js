import React from 'react'

const Input = React.forwardRef(({ label, input }, ref) => {
    return (
        <div className="my-3">
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} className="bg-gray-200 mx-2 px-1 text-pink-600 rounded" {...input} />
        </div>
    )
})

export default Input
