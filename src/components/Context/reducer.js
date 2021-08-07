export const initailstate = {
    cart: [],
    meals: [],
    total: 0
}


export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            const isExist = state.cart.findIndex((item) => item.id === action.payload.id)
            let findedItem;
            isExist >= 0 ? findedItem = state.cart[isExist] : findedItem = null
            let newArray;
            if (findedItem) {
                const updateItem = {
                    ...findedItem,
                    amount: findedItem.amount + action.payload.amount
                }
                newArray = [...state.cart];
                newArray[isExist] = updateItem
            } else {
                newArray = [...state.cart, action.payload]
            }

            return {
                ...state,
                cart: newArray,
                total: state.total + action.payload.price * action.payload.amount
            }
        case "REMOVE":
            const isExistItem = state.cart.findIndex((item) => item.id === action.id)
            let findedItemRemove;
            isExistItem >= 0 ? findedItemRemove = state.cart[isExistItem] : findedItemRemove = null
            let updatedArr
            if (findedItemRemove.amount === 1) {
                updatedArr = state.cart.filter((item) => item.id !== action.id)
            }
            else {
                let updatedItem = {
                    ...findedItemRemove,
                    amount: findedItemRemove.amount - 1
                }
                updatedArr = [...state.cart]
                updatedArr[isExistItem] = updatedItem
            }
            const total = state.total - findedItemRemove.price
            return {
                ...state,
                cart: updatedArr,
                total
            }
        case "ADD_MEALS":
            return {
                ...state,
                meals:action.payload
            }
        default:
            return state
    }
}