import React from 'react';

// css
import './aside.css'

// images
import Logo from '../../images/logo.png';

const AsideTop = function() {
    return (
        <div className="AsideTop">
            <div className="AsideTop-logo">
                <img width="180" alt={Logo} src={Logo} />
            </div>
        </div>
    );
}

export default AsideTop;