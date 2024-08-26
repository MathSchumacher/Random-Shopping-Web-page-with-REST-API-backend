export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        product
    }
}

export const addItem = (product) => {
    return {
        type: 'ADD_ITEM',
        
        product
    }
}

export const removeItem = (product) => {
    return {
        type: 'REMOVE_ITEM',
        
        product
    }
}

export const deleteItem = (product) => {
    return {
        type: 'DELETE_ITEM',
        
        product
    }
}

export const changeCart = (localCart) => {
    return {
        type: 'CHANGE_CART',
        localCart
    }
}
