import React from 'react';

const SCPList = ({ onSelectSCP, scpData }) => {
    const getObjectClassBadge = (objectClass) => {
        const classStyles = {
            'Euclid': 'badge-euclid',
            'Safe': 'badge-safe',
            'Keter': 'badge-keter'
        };
        return `badge ${classStyles[objectClass] || 'badge-unknown'}`;
    };

    const handleCardClick = (scp) => {
        onSelectSCP(scp);
    };

    const handleKeyDown = (e, scp) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectSCP(scp);
        }
    };

    return (
        <div className="scp-list">
            <div className="text-center">
                <h2>SCP Foundation Database</h2>
                <p className="subtitle">Select an SCP to view details</p>
            </div>
            
            <div className="scp-grid">
                {scpData.map(scp => (
                    <div 
                        key={scp.id} 
                        className="scp-card"
                        role="button"
                        tabIndex="0"
                        aria-label={`View details for ${scp.title}`}
                        onClick={() => handleCardClick(scp)}
                        onKeyDown={(e) => handleKeyDown(e, scp)}
                    >
                        <div className="card-header">
                            <h3>{scp.title}</h3>
                            <span className={getObjectClassBadge(scp.objectClass)}>
                                {scp.objectClass}
                            </span>
                        </div>
                        
                        {scp.image && (
                            <img 
                                src={scp.image} 
                                alt={scp.title}
                                className="card-image"
                                onError={(e) => {
                                    e.target.src = '/images/warning.gif';
                                }}
                            />
                        )}
                        
                        <div className="card-body">
                            <p className="card-description">
                                {scp.description.substring(0, 120)}...
                            </p>
                        </div>
                        
                        <div className="card-footer">
                            <button className="view-details-btn">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SCPList;