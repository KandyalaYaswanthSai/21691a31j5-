import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = ({ products }) => {
    const { productName } = useParams();
    const product = products.find(p => p.productName === productName);
    if (!product) return <p>Product not found</p>;

    return (
        <div className="product-detail">
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
};
export default ProductDetail;
