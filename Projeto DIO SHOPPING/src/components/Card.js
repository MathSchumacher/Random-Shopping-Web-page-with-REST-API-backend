import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/actions/cart';
import './Card.css'; // Importe o CSS

const Card = ({ product, children }) => {
    const dispatch = useDispatch();

    return (
        <div className="card-container">
            <img className="card-image" src={product.image} alt={product.name_product} />
            <div className="card-title">
                {children}
            </div>
            <div className="card-price">
                R$ {product.price.toFixed(2)}
            </div>
            <button
                className="card-button"
                onClick={() => dispatch(addToCart({ id: product.id_product, ...product }))}
            >
                Adicionar
            </button>
        </div>
    );
};

export default Card;
