import React from 'react';

// css
import './aside.css'

const AsideBottom = function() {
    return (
        <div className="AsideBottom">
            <div className="AsideBottom-text">
                <span>Status</span>
            </div>
            <div className="AsideBottom-input">
                <input type="text" placeholder="Search" />
            </div>
            <div className="AsideBottom-button">
                <button>Delivered</button>
            </div>
        </div>
    );
}

export default AsideBottom;