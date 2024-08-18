import React, { useState } from 'react';
const Filter = ({ onFilter }) => {
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const handleFilter = () => {
        onFilter({ category, minPrice, maxPrice });
    };
    return (
        <div className="filter">
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                {/* Add more categories */}
            </select>
            <input type="number" placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};
export default Filter;
