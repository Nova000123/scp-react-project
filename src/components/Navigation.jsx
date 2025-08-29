import React from 'react';

const Navigation = ({ onSelectSCP, currentSCP, scpData }) => {
    const getObjectClassBadge = (objectClass) => {
        const classStyles = {
            'Euclid': 'badge-euclid',
            'Safe': 'badge-safe',
            'Keter': 'badge-keter'
        };
        return `badge ${classStyles[objectClass] || 'badge-unknown'}`;
    };

    return (
        <nav className="scp-navigation">
            <h3>SCP CATALOG</h3>
            <div className="nav-items">
                {scpData.map(scp => (
                    <button
                        key={scp.id}
                        onClick={() => onSelectSCP(scp)}
                        className={`nav-btn ${currentSCP?.id === scp.id ? 'active' : ''}`}
                        aria-current={currentSCP?.id === scp.id ? "page" : undefined}
                        aria-label={`View ${scp.title}, Object Class: ${scp.objectClass}`}
                    >
                        <span>{scp.title}</span>
                        <span className={getObjectClassBadge(scp.objectClass)}>
                            {scp.objectClass}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
