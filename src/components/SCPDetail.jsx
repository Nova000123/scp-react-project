import React from 'react';

const SCPDetail = ({ scp, onBack }) => {
    const getObjectClassBadge = (objectClass) => {
        const classStyles = {
            'Euclid': 'badge-euclid',
            'Safe': 'badge-safe',
            'Keter': 'badge-keter'
        };
        return `object-badge ${classStyles[objectClass] || 'badge-unknown'}`;
    };

    return (
        <div className="scp-detail">
            <button onClick={onBack} className="back-button">
                ← BACK TO LIST
            </button>
            
            <div className="scp-content">
                <div className="scp-header-row">
                    <h2>{scp.title}</h2>
                    <span className={getObjectClassBadge(scp.objectClass)}>
                        OBJECT CLASS: {scp.objectClass}
                    </span>
                </div>
                
                {scp.image && (
                    <img 
                        src={scp.image} 
                        alt={scp.title} 
                        className="scp-image"
                        onError={(e) => {
                            e.target.src = '/images/warning.gif';
                        }}
                    />
                )}

                <div className="scp-section">
                    <h3>DESCRIPTION</h3>
                    <p>{scp.description}</p>
                </div>

                <div className="scp-section">
                    <h3>CONTAINMENT PROCEDURES</h3>
                    <p>{scp.procedures}</p>
                </div>

                {scp.reference && (
                    <div className="scp-section">
                        <h3>REFERENCE</h3>
                        <p>{scp.reference}</p>
                    </div>
                )}

                {scp.discovery && (
                    <div className="scp-section">
                        <h3>DISCOVERY</h3>
                        <p>{scp.discovery}</p>
                    </div>
                )}

                {scp.notes && (
                    <div className="scp-section">
                        <h3>NOTES</h3>
                        <p>{scp.notes}</p>
                    </div>
                )}

                {scp.addenda && scp.addenda.length > 0 && (
                    <div className="scp-section">
                        <h3>ADDENDA</h3>
                        {scp.addenda.map((addendum, index) => (
                            <div key={index} className="addendum">
                                <h4>{addendum.title}</h4>
                                <p>{addendum.content}</p>
                            </div>
                        ))}
                    </div>
                )}

                {scp.history && scp.history.length > 0 && (
                    <div className="scp-section">
                        <h3>HISTORY</h3>
                        {scp.history.map((event, index) => (
                            <div key={index} className="history-event">
                                <strong>{event.date}:</strong> {event.event}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SCPDetail;