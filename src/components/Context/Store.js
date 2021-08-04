import React, { useContext, useReducer } from "react"

const State = React.createContext([])

const StateProvider = ({ reducer, initailState, children }) => {
    return (
        <State.Provider value={useReducer(reducer, initailState)}>
            {children}
        </State.Provider>
    )

}
export  const useStateValue=()=>useContext(State)
export default StateProvider