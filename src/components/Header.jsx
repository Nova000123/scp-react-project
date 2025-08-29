import React from 'react';

const Header = ({ onHomeClick }) => {
    return (
        <header className="scp-header" onClick={onHomeClick} style={{ cursor: onHomeClick ? 'pointer' : 'default' }}>
            <div className="header-content">
                <img 
                    src="/images/scp01.png" 
                    alt="SCP Foundation Logo" 
                    className="scp-logo"
                />
                <p className="header-subtitle">Secure. Contain. Protect.</p>
            </div>
        </header>
    );
};

export default Header;