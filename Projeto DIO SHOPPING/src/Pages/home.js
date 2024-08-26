import React from 'react';
import { useSelector } from 'react-redux';
import './HomePage.css'; // Importe o CSS
import Card from '../components/Card';

const HomePage = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="root-grid">
            <div className="main-content">
                {products.map(item => (
                    <div key={item.id_product} className="product-card">
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
