import React from 'react';

// css
import './nav.css'

// SVG
import Email from '../../svg/email.svg';
import Home from '../../svg/home.svg';
import Settings from '../../svg/settings.svg';
import Star from '../../svg/star.svg';
import User from '../../svg/user.svg';

function Nav(props) {
    const navItems = [
        {text: 'Home', svg: Email},
        {text: 'Messages', svg: Home},
        {text: 'Wishlist', svg: Settings},
        {text: 'Settings', svg: Star},
        {text: 'My Account', svg: User}
    ];
    let item = (
        <ul className="Nav">
        {
            navItems.map((item, index) => {
                return (
                    <li className="Nav-item" key={index}>
                        <div>
                            <img width="25" alt={item.svg} src={item.svg} />
                        </div>
                        <span>{item.text}</span>
                    </li>
                )
            })
        }
        </ul>
    )
    return (
        <div>
            {item}
        </div>
    );
};

export default Nav;