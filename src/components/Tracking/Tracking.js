import React from 'react';

// css
import './tracking.css'

// components
import Icon from '../Icon/Icon';

// images
import Truck from '../../images/truck.png';
import Dots from '../../svg/dots.svg';

const Tracking = function() {
    const data = [
        {
            date: 'Monday 10th 2:28 PM',
            delivering: {
                from: 'Houston, TX, 33619', 
                to: 'Atlanta, GA, 30123'
            },
            price: '$250.000',
            items: 1
        },
        {
            date: 'Monday 10th 2:28 PM',
            delivering: {
                from: 'Houston, TX, 33619', 
                to: 'Atlanta, GA, 30123'
            },
            price: '$250.000',
            items: 1
        },
        {
            date: 'Monday 10th 2:28 PM',
            delivering: {
                from: 'Houston, TX, 33619', 
                to: 'Atlanta, GA, 30123'
            },
            price: '$250.000',
            items: 1
        },
    ];
    return (
        <div className="Tracking">
            {
                data.map((item, index) => {
                    return (
                        <div className="Tracking-content" key={index}>
                            <div className="Tracking-check">
                                <Icon name="Check" />
                            </div>
                            <div className="Tracking-item">
                                <div className="Tracking-item-date">
                                    {item.date}
                                </div>
                                <div className="Tracking-item-delivering">
                                    <span>{item.delivering.to}</span>
                                    <span>Arrow</span>
                                    <span>{item.delivering.from}</span>
                                </div>
                                <div>
                                    <span className="Tracking-item-img">
                                        <img alt={Truck} width="70px" src={Truck} />
                                    </span>
                                </div>
                                <div className="Tracking-item-price">
                                    <span>{item.price}</span>
                                </div>
                                <div className="Tracking-item-items">
                                    <span className="Tracking-item-items-text">{item.items}</span>
                                </div>
                                <div className="Tracking-item-dots">
                                    <span><img alt={Dots} width="30" src={Dots} /></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Tracking;