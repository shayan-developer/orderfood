import React from 'react'

function Button({children ,type,onClick,classes }) {
    return (
        <button type={type} onClick={onClick} className={`bg-pink-600 rounded w-20 focus:ring-4 ring-pink-800 duration-300 hover:cursor-pointer hover:bg-pink-700 ${classes}`}>
            {children}
        </button>
    )
}

export default Button
