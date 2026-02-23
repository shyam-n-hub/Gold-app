// ============================================
// Sell Old Gold Page (HUID)
// Shows form + user's request history with status
// ============================================
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchLiveGoldRates } from '../services/goldRateService';
import { createSellRequest, calculateSellValue, getUserSellRequests } from '../services/sellGoldService';
import GoldRateWidget from '../components/GoldRateWidget';
import toast from 'react-hot-toast';
import '../styles/Pages.css';

const STATUS_COLORS = {
    'Pending': '#e6a817',
    'Reviewing': '#3b82f6',
    'Approved': '#22c55e',
    'Rejected': '#ef4444',
    'Completed': '#10b981'
};

export default function SellGold() {
    const { currentUser } = useAuth();
    const [goldRates, setGoldRates] = useState(null);
    const [form, setForm] = useState({
        huidNumber: '',
        weight: '',
        purity: '22K'
    });
    const [sellValue, setSellValue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [myRequests, setMyRequests] = useState([]);
    const [loadingRequests, setLoadingRequests] = useState(false);

    useEffect(() => {
        async function loadRates() {
            try {
                const rates = await fetchLiveGoldRates();
                setGoldRates(rates);
            } catch (error) {
                console.error('Error loading gold rates:', error);
            }
        }
        loadRates();
    }, []);

    // Load user's sell requests
    useEffect(() => {
        if (currentUser) {
            loadMyRequests();
        }
    }, [currentUser]);

    async function loadMyRequests() {
        setLoadingRequests(true);
        try {
            const requests = await getUserSellRequests(currentUser.uid);
            setMyRequests(requests);
        } catch (error) {
            console.error('Error loading requests:', error);
        } finally {
            setLoadingRequests(false);
        }
    }

    // Calculate value on form change
    useEffect(() => {
        if (form.weight && goldRates) {
            const rate = form.purity === '24K' ? goldRates['24k'] : goldRates['22k'];
            const value = calculateSellValue(rate, parseFloat(form.weight));
            setSellValue(value);
        } else {
            setSellValue(null);
        }
    }, [form.weight, form.purity, goldRates]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!currentUser) {
            toast.error('Please login to submit a sell request');
            return;
        }

        if (!form.huidNumber || !form.weight) {
            toast.error('Please fill all fields');
            return;
        }

        setLoading(true);
        try {
            await createSellRequest({
                userId: currentUser.uid,
                userEmail: currentUser.email,
                userName: currentUser.displayName || '',
                huidNumber: form.huidNumber,
                weight: parseFloat(form.weight),
                purity: form.purity,
                estimatedValue: sellValue,
                goldRate: form.purity === '24K' ? goldRates['24k'] : goldRates['22k']
            });
            toast.success('Sell request submitted successfully!');
            setForm({ huidNumber: '', weight: '', purity: '22K' });
            setSellValue(null);
            await loadMyRequests(); // Refresh the list
        } catch (error) {
            toast.error('Failed to submit. Try again.');
            console.error('Sell request error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sell-gold-page">
            <div className="container">
                <h1>Sell Your Gold</h1>
                <p className="subtitle">
                    Get the best value for your old gold with HUID-verified transparent pricing
                </p>

                {/* Current Rates */}
                <div style={{ maxWidth: '560px', margin: '0 auto 32px' }}>
                    <GoldRateWidget goldRates={goldRates} />
                </div>

                {/* Sell Form */}
                <div className="sell-gold-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>HUID Number</label>
                            <input
                                type="text"
                                name="huidNumber"
                                value={form.huidNumber}
                                onChange={handleChange}
                                placeholder="Enter HUID number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Weight (in grams)</label>
                            <input
                                type="number"
                                name="weight"
                                value={form.weight}
                                onChange={handleChange}
                                placeholder="Enter gold weight in grams"
                                min="0.1"
                                step="0.01"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Purity</label>
                            <select name="purity" value={form.purity} onChange={handleChange}>
                                <option value="22K">22K Gold</option>
                                <option value="24K">24K Gold</option>
                            </select>
                        </div>

                        {/* Estimated Value */}
                        {sellValue !== null && (
                            <div className="sell-value-display">
                                <div className="label">Estimated Sell Value</div>
                                <div className="value">₹{sellValue.toLocaleString('en-IN')}</div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-gold btn-lg"
                            style={{ width: '100%' }}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Sell Request'}
                        </button>
                    </form>
                </div>

                {/* User's Sell Request History */}
                {currentUser && (
                    <div style={{ marginTop: '48px' }}>
                        <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '20px' }}>
                            📋 My Sell Requests
                        </h2>

                        {loadingRequests ? (
                            <div className="spinner-overlay" style={{ minHeight: '100px' }}>
                                <div className="spinner"></div>
                            </div>
                        ) : myRequests.length === 0 ? (
                            <div className="sell-gold-card" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                                No sell requests yet. Submit your first request above.
                            </div>
                        ) : (
                            myRequests.map(req => (
                                <div key={req.id} className="sell-gold-card" style={{ marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                                        <div>
                                            <strong style={{ fontSize: '1rem' }}>HUID: {req.huidNumber}</strong>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                                                {req.createdAt ? new Date(req.createdAt).toLocaleDateString('en-IN', {
                                                    day: 'numeric', month: 'short', year: 'numeric',
                                                    hour: '2-digit', minute: '2-digit'
                                                }) : ''}
                                            </div>
                                        </div>
                                        <span style={{
                                            padding: '4px 14px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            color: '#fff',
                                            background: STATUS_COLORS[req.status] || '#999'
                                        }}>
                                            {req.status}
                                        </span>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Weight</div>
                                            <div style={{ fontWeight: 600 }}>{req.weight}g</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Purity</div>
                                            <div style={{ fontWeight: 600 }}>{req.purity}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Gold Rate</div>
                                            <div style={{ fontWeight: 600 }}>₹{req.goldRate?.toLocaleString('en-IN')}/g</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Est. Value</div>
                                            <div style={{ fontWeight: 700, color: 'var(--rose-gold)' }}>₹{req.estimatedValue?.toLocaleString('en-IN')}</div>
                                        </div>
                                    </div>

                                    {/* Admin Message */}
                                    {req.adminMessage && (
                                        <div style={{
                                            background: 'var(--light-gray)',
                                            borderRadius: 'var(--radius-sm)',
                                            padding: '12px 16px',
                                            borderLeft: '3px solid var(--rose-gold)'
                                        }}>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                                                💬 Message from Admin
                                            </div>
                                            <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                                                {req.adminMessage}
                                            </div>
                                            {req.updatedAt && (
                                                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                                    {new Date(req.updatedAt).toLocaleDateString('en-IN', {
                                                        day: 'numeric', month: 'short', year: 'numeric',
                                                        hour: '2-digit', minute: '2-digit'
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
