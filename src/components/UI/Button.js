import React from 'react'

function Button({ children, type, onClick, classes, varient = "fill" }) {
    let setVarient;
    if (varient === "fill") {
        setVarient = "bg-pink-600 text-white  "
    }else if(varient==="outline"){
        setVarient = "border-pink-600 text-pink-600 border-2 hover:text-white"
    }

    return (
        <button type={type} onClick={onClick} className={`${setVarient} rounded w-20 text-white focus:ring-2 ring-pink-800 duration-300 hover:cursor-pointer hover:bg-pink-700  ${classes}`}>
            {children}
        </button>
    )
}

export default Button
