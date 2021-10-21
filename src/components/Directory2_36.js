import React, { useState, useEffect } from 'react';
import './Directory_36.scss'
import MenuItem_36 from './MenuItem_36';
import axios from 'axios';
//import items from'./menu-items-data'

const Directory2_36 = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const HEROKU_URL = 'https://heroku-crown-36.herokuapp.com/api_36/category_36'
            const { data } = await axios.get(HEROKU_URL)
            console.log('/api/category_36', data)
            setMenuItems(data)
        }
        fetchMenuItems()
    }, [])

    console.log('menuItems', menuItems);

    return (
        <div className="directory-menu">

            {menuItems.map((item) => {
                const { id, name, remote_url, size } = item;
                return (
                    <MenuItem_36
                        id={id}
                        name={name}
                        remote_url={remote_url}
                        size={size}
                    />
                )
            })}


        </div>
    );
};

export default Directory2_36;