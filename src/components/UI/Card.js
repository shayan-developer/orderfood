import React from 'react'

function Card(props) {
    return (
        <div className="bg-white w-10/12 mx-auto p-2 rounded mb-4">
            {props.children}
        </div>
    )
}

export default Card
