import React from 'react'
import ReactDom from 'react-dom'

const Backdrop = ({ onClick }) => {
    return <div
        onClick={onClick}
        className="fixed top-0 left-0 w-full h-screen opacity-80 bg-gray-700 z-20" />
}

const ModalOverLay = ({ children }) => {
    return (
        <div className="fixed top-1/4 z-30 w-10/12 left-1/2 transform -translate-x-2/4 -translate-y-2/4 rounded-2xl bg-white p-4">
            {children}
        </div>
    )
}

const el = document.getElementById("overlays")

function Modal({ children, onClose }) {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClick={onClose} />, el)}

            {ReactDom.createPortal(<ModalOverLay>{children}</ModalOverLay>, el)}
        </>
    )
}

export default Modal
