// src/components/store/reducers/cart.js

const INITIAL_STATE = {
    value: 0,
    Cart: []
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const product = action.product || {};
            if (!product.id_product) return state;  // Verifica se id_product é válido

            const existingItem = state.Cart.find(item => item.id === product.id_product);

            if (existingItem) {
                return {
                    ...state,
                    value: state.value + 1,
                    Cart: state.Cart.map(item =>
                        item.id === product.id_product
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                const newItem = {
                    id: product.id_product,
                    name: product.name_product,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                };

                return {
                    ...state,
                    value: state.value + 1,
                    Cart: [...state.Cart, newItem]
                };
            }
        }
        case 'ADD_ITEM': {
            const product = action.product || {};
            if (!product.id) return state;  // Verifica se product.id é válido

            return {
                ...state,
                value: state.value + 1,
                Cart: state.Cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        }
        case 'REMOVE_ITEM': {
            const product = action.product || {};
            if (!product.id) return state;  // Verifica se product.id é válido

            const updatedCart = state.Cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0);

            return {
                ...state,
                value: state.value - 1,
                Cart: updatedCart
            };
        }
        case 'DELETE_ITEM': {
            const product = action.product || {};
            if (!product.id) return state;  // Verifica se product.id é válido

            const itemToRemove = state.Cart.find(item => item.id === product.id);
            const updatedCart = state.Cart.filter(item => item.id !== product.id);

            return {
                ...state,
                value: state.value - (itemToRemove ? itemToRemove.quantity : 0),
                Cart: updatedCart
            };
        }
        case 'CHANGE_CART': {
            return {
                ...state,
                ...action.localCart
            };
        }
        default:
            return state;
    }
}
