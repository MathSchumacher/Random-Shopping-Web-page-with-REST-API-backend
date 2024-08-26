import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importe o CSS
import Cart from './Cart';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title">
                My Random Shopping
            </div>
            <div>
                <Link to="/" className="header-link">
                    Home
                </Link>
                <Link to="/contato" className="header-link">
                    Contato
                </Link>
            </div>
            <div className="header-cart">
                <Cart />
            </div>
        </div>
    );
}

export default Header;
