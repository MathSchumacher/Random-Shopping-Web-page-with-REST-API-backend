import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addItem, removeItem } from '../store/actions/cart'; // Ajuste o caminho conforme sua estrutura

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    let totalPrice = 0;

    for (let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity);
    }

    if (cart.value > 0) {
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart));
    }

    const handleCheckout = () => {
        alert('Finalizando compra...');
        // Aqui você pode adicionar a lógica para redirecionar o usuário para a página de checkout
        // ou integrar com um sistema de pagamento.
    };

    return (
        <>
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#CartModal">
                <span><i className="fa-solid fa-cart-shopping fa-2x"></i></span>
                <span className="badge rounded-pill bg-info text-dark">
                    {cart.value}
                </span>
            </button>

            {/* Modal */}
            <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Qtd</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.Cart.map(item => (
                                        <tr key={item.id}>
                                            <th>
                                                <button onClick={() => dispatch(deleteItem({ id: item.id }))} className="badge bg-danger">
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </th>
                                            <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.name} width="50px" /></th>
                                            <th><span className="badge bg-warning">
                                                {item.quantity}
                                            </span></th>
                                            <th>R$ {item.price.toFixed(2)}</th>
                                            <th>
                                                <button onClick={() => dispatch(addItem({ id: item.id }))} className="badge bg-primary">
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </th>
                                            <th>
                                                <button onClick={() => dispatch(removeItem({ id: item.id }))} className="badge bg-danger">
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                            </th>
                                            <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th colSpan="2" scope="col">Total</th>
                                        <th colSpan="3">{cart.value} itens</th>
                                        <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-success" onClick={handleCheckout}>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
