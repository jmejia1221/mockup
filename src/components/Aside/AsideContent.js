import React from 'react';

// components
import AsideTop from './AsideTop';
import AsideMiddle from './AsideMiddle';
import AsideBottom from './AsideBottom';

const Aside = function() {
    return (
        <aside>
            <AsideTop />
            <AsideMiddle />
            <AsideBottom />
        </aside>
    );
};

export default Aside;