export const initailstate={
    cart:[],
    total:0
}


export const reducer=(state,action)=>{
switch (action.type) {
    case "ADD":
        return{
            cart:[...state.cart,action.payload],
            total:state.total+action.payload.price*action.payload.amount
        }

    default:
        return state
}
}