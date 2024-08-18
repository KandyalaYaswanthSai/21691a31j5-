import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.productName} className="product-item">
                    <h3>{product.productName}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                    <p>Availability: {product.availability}</p>
                    <Link to={`/product/${product.productName}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};
export default ProductList;
