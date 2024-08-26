import productsList from './product';

const initialState = productsList;

export default function products(state = initialState, action) {
    // Caso precise manipular ações relacionadas a produtos, você pode adicionar um switch statement aqui
    return state;
}
