import React, { useState } from 'react';
import './Directory_36.scss'
import MenuItem_36 from './MenuItem_36';
import items from './menu-items-data'

const Directory_36 = () => {

    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);

    return (
        <div className="directory-menu">

            {menuItems.map((item) => {
                const { id, name, remoteUrl, size } = item;
                return (
                    <MenuItem_36
                        id={id}
                        name={name}
                        remoteUrl={remoteUrl}
                        size={size}
                    />
                )
            })}


        </div>
    );
};

export default Directory_36;