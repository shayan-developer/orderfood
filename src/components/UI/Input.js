import React from 'react'

const Input = React.forwardRef(({ label, input,classes }, ref) => {
    return (
        <div className="my-3 flex w-full justify-between items-center  ">
            <label htmlFor={input.id} className='my-2'>{label}</label>
            <input ref={ref} className="bg-gray-200 mx-2 px-1
             outline-none text-gray-800 rounded" {...input} />
        </div>
    )
})

export default Input
