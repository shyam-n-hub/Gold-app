// ============================================
// Gold Rate Widget Component
// ============================================
import React from 'react';

const widgetStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
};

const rateCardStyle = {
    background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
    borderRadius: '12px',
    padding: '20px 28px',
    color: '#fff',
    flex: '1',
    minWidth: '180px',
    position: 'relative',
    overflow: 'hidden'
};

const shimmerOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, transparent 0%, rgba(183,110,121,0.08) 50%, transparent 100%)',
    pointerEvents: 'none'
};

export default function GoldRateWidget({ goldRates, compact = false }) {
    if (!goldRates) return null;

    const formatRate = (rate) => {
        return rate ? `₹${Number(rate).toLocaleString('en-IN')}` : '—';
    };

    const lastUpdated = goldRates.lastUpdated
        ? new Date(goldRates.lastUpdated).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        })
        : '';

    if (compact) {
        return (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '0.85rem' }}>
                <span style={{ color: '#B76E79', fontWeight: 600 }}>
                    24K: {formatRate(goldRates['24k'])}/g
                </span>
                <span style={{ color: '#999' }}>|</span>
                <span style={{ color: '#B76E79', fontWeight: 600 }}>
                    22K: {formatRate(goldRates['22k'])}/g
                </span>
            </div>
        );
    }

    return (
        <div style={widgetStyle}>
            <div style={rateCardStyle}>
                <div style={shimmerOverlay} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        24K Gold
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#E8C99B' }}>
                        {formatRate(goldRates['24k'])}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '4px' }}>per gram</div>
                </div>
            </div>

            <div style={rateCardStyle}>
                <div style={shimmerOverlay} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        22K Gold
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#E8C99B' }}>
                        {formatRate(goldRates['22k'])}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '4px' }}>per gram</div>
                </div>
            </div>

            {lastUpdated && (
                <div style={{ width: '100%', textAlign: 'right', fontSize: '0.75rem', color: '#999', marginTop: '-8px' }}>
                    🔴 Live • Updated: {lastUpdated}
                    {goldRates.manualOverride && ' (Manual Override)'}
                    {goldRates.source && !goldRates.manualOverride && ` • via ${goldRates.source}`}
                </div>
            )}
        </div>
    );
}
