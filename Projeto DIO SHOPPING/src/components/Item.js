import React from 'react';
import './Item.css'; // Importe o CSS

const Item = ({ name, details }) => {
    return (
        <div className="item-container">
            <div className="item-text">
                <div className="item-name">{name}</div>
                <div className="item-details">{details}</div>
            </div>
        </div>
    );
}

export default Item;
