// ============================================
// Products Listing Page
// ============================================
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoDiamondOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { fetchLiveGoldRates, calculateJewelryPrice } from '../services/goldRateService';
import { getAllProducts } from '../services/productService';
import '../styles/Products.css';

const CATEGORIES = ['all', 'ring', 'chain', 'necklace', 'bangle', 'earring', 'pendant', 'bracelet'];
const GOLD_TYPES = ['all', '22K', '24K'];

export default function Products() {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';

    const [products, setProducts] = useState([]);
    const [goldRates, setGoldRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(initialCategory);
    const [goldType, setGoldType] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        async function loadData() {
            try {
                const [rates, prods] = await Promise.all([
                    fetchLiveGoldRates(),
                    getAllProducts()
                ]);
                setGoldRates(rates);
                setProducts(prods);
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    // Update category from URL params
    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat) setCategory(cat);
    }, [searchParams]);

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Search filter
        if (search.trim()) {
            const q = search.toLowerCase();
            filtered = filtered.filter(p =>
                p.name?.toLowerCase().includes(q) ||
                p.description?.toLowerCase().includes(q) ||
                p.category?.toLowerCase().includes(q)
            );
        }

        // Category filter
        if (category !== 'all') {
            filtered = filtered.filter(p => p.category === category);
        }

        // Gold type filter
        if (goldType !== 'all') {
            filtered = filtered.filter(p => p.goldType === goldType);
        }

        // Sort
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => {
                const rateA = a.goldType === '24K' ? goldRates?.['24k'] || 0 : goldRates?.['22k'] || 0;
                const rateB = b.goldType === '24K' ? goldRates?.['24k'] || 0 : goldRates?.['22k'] || 0;
                const priceA = calculateJewelryPrice(rateA, a.weightInGrams || 0, a.wastageInGrams || 0, a.makingCharge || 0, a.taxPercentage || 0);
                const priceB = calculateJewelryPrice(rateB, b.weightInGrams || 0, b.wastageInGrams || 0, b.makingCharge || 0, b.taxPercentage || 0);
                return priceA - priceB;
            });
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => {
                const rateA = a.goldType === '24K' ? goldRates?.['24k'] || 0 : goldRates?.['22k'] || 0;
                const rateB = b.goldType === '24K' ? goldRates?.['24k'] || 0 : goldRates?.['22k'] || 0;
                const priceA = calculateJewelryPrice(rateA, a.weightInGrams || 0, a.wastageInGrams || 0, a.makingCharge || 0, a.taxPercentage || 0);
                const priceB = calculateJewelryPrice(rateB, b.weightInGrams || 0, b.wastageInGrams || 0, b.makingCharge || 0, b.taxPercentage || 0);
                return priceB - priceA;
            });
        } else if (sortBy === 'weight') {
            filtered.sort((a, b) => (a.weightInGrams || 0) - (b.weightInGrams || 0));
        } else {
            // Newest first
            filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        }

        return filtered;
    }, [products, search, category, goldType, sortBy, goldRates]);

    return (
        <div className="products-page">
            <div className="container">
                <div className="page-header">
                    <h1>Our Collection</h1>
                    <p>Discover exquisite gold jewelry crafted with perfection</p>
                </div>

                {/* Filters */}
                <div className="filters-bar">
                    <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                        <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search jewelry..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ paddingLeft: '36px' }}
                        />
                    </div>

                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {CATEGORIES.map(c => (
                            <option key={c} value={c}>
                                {c === 'all' ? 'All Categories' : c.charAt(0).toUpperCase() + c.slice(1)}
                            </option>
                        ))}
                    </select>

                    <select value={goldType} onChange={(e) => setGoldType(e.target.value)}>
                        {GOLD_TYPES.map(g => (
                            <option key={g} value={g}>
                                {g === 'all' ? 'All Gold Types' : g}
                            </option>
                        ))}
                    </select>

                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="newest">Newest First</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="weight">Weight</option>
                    </select>

                    <span className="result-count">{filteredProducts.length} items</span>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="spinner-overlay">
                        <div className="spinner"></div>
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                goldRates={goldRates}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="products-empty">
                        <IoDiamondOutline />
                        <h3>No products found</h3>
                        <p>Try adjusting your filters or search terms</p>
                    </div>
                )}
            </div>
        </div>
    );
}
