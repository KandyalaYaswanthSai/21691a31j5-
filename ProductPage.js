import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api';
import ProductDetail from '../components/ProductDetail';
const ProductPage = () => {
    const { productName } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
            setProducts(response);
        };
        fetchProduct();
    }, []);
    return (
        <div>
            <ProductDetail products={products} />
        </div>
    );
};
export default ProductPage;
