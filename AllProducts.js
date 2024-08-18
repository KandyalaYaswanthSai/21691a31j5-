import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState({});
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts('AMZ', filter.category || 'Phone', 10, filter.minPrice || 1, filter.maxPrice || 10000);
            setProducts(response);
        };
        fetchProducts();
    }, [filter]);
    return (
        <div>
            <h1>All Products</h1>
            <Filter onFilter={setFilter} />
            <ProductList products={products} />
        </div>
    );
};
export default AllProducts;
