import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import './styles.css';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/product/:productName" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};
export default App;
