
import React from 'react';

// css
import './aside.css'

// images
import Sale from '../../images/sale.png'
import Calendar from '../../images/calendar.png'
import Heart from '../../images/heart.png'

// svg
import Bulb from '../../svg/bulb.svg'

const AsideMiddle = function() {
    return (
        <div className="AsideMiddle">
            <div className="AsideMiddle-filters">
                <span className="AsideMiddle-filters-img">
                    <img width="15" alt={Bulb} src={Bulb} />
                </span>
                <span>Smart Filters</span>
            </div>
            <div className="AsideMiddle-info">
                <div className="AsideMiddle-grid">
                    <img width="80" alt={Sale} src={Sale} />
                    <div className="AsideMiddle-check">
                        <span className="AsideMiddle-check-circle"></span>
                    </div>
                </div>
                <div className="AsideMiddle-grid">
                    <img width="80" alt={Calendar} src={Calendar} />
                    <div className="AsideMiddle-check">
                        <span className="AsideMiddle-check-circle"></span>
                    </div>
                </div>
                <div className="AsideMiddle-grid">
                    <img width="80" alt={Heart} src={Heart} />
                    <div className="AsideMiddle-check">
                        <span className="AsideMiddle-check-circle"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsideMiddle;