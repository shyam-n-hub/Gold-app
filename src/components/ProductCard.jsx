// ============================================
// Product Card Component
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { IoDiamondOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import { calculateJewelryPrice } from '../services/goldRateService';
import '../styles/ProductCard.css';

export default function ProductCard({ product, goldRates }) {
    const { addToCart } = useCart();

    // Calculate price based on live gold rate
    const goldRate = product.goldType === '24K'
        ? (goldRates?.['24k'] || 0)
        : (goldRates?.['22k'] || 0);

    const calculatedPrice = calculateJewelryPrice(
        goldRate,
        product.weightInGrams || 0,
        product.wastageInGrams || 0,
        product.makingCharge || 0,
        product.taxPercentage || 0
    );

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, calculatedPrice);
    };

    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <div className="product-card-image">
                {product.imageURL ? (
                    <img src={product.imageURL} alt={product.name} loading="lazy" />
                ) : (
                    <div className="no-image-placeholder">
                        <IoDiamondOutline />
                    </div>
                )}
                <span className="badge badge-gold gold-badge">{product.goldType}</span>
            </div>

            <div className="product-card-body">
                <span className="category-label">{product.category}</span>
                <h3>{product.name}</h3>
                <span className="weight-info">
                    {product.weightInGrams}g • {product.goldType}
                </span>

                <div className="product-card-footer">
                    <span className="price">₹{calculatedPrice.toLocaleString('en-IN')}</span>
                    <button
                        className="add-btn"
                        onClick={handleAddToCart}
                        title="Add to Cart"
                    >
                        <FiPlus />
                    </button>
                </div>
            </div>
        </Link>
    );
}
