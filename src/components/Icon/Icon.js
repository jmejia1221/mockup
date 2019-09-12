import React from 'react';

// css
import './icon.css'

const Icon = function(props) {
    const size = {
        width: props.width,
        height: props.height
    }
    return (
        <div style={size} className="Icon ">
            <span className={`Icon-${props.name}`}></span>
        </div>
    )
}

export default Icon;