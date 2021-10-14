#P1

![](https://i.imgur.com/BrftNDx.jpg)

```js
import './App_36.scss';

function App() {
  return (
    <div>
      <div className='homepage'>
        <div className='directory-menu'>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/cvpntL1/hats.png'
              alt=''
            />
            <a href='./hats.html' className='content'>
              <h1 className='title'>HATS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/px2tCc3/jackets.png'
              alt=''
            />
            <a href='./jackets.html' className='content'>
              <h1 className='title'>JACKETS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/0jqHpnp/sneakers.png'
              alt=''
            />
            <a href='./sneakers.html' className='content'>
              <h1 className='title'>SNEAKERS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/GCCdy8t/womens.png'
              alt=''
            />
            <a href='./womens.html' className='content'>
              <h1 className='title'>WOMENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/R70vBrQ/men.png'
              alt=''
            />
            <a href='./mens.html' className='content'>
              <h1 className='title'>MENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

#P2

![](https://i.imgur.com/dbCuNSh.jpg)

```js
Homepage;

import React from 'react';
import Directory_36 from '../components/Directory_36';
import './Homepage.scss';

const Homepage_36 = () => {
  return (
    <div className='homepage'>
      <Directory_36 />
    </div>
  );
};

export default Homepage_36;
```

```js
Directory;

import React from 'react';
import './Directory_36.scss';
import MenuItem_36 from './Menultem_36';

const Directory_36 = () => {
  return (
    <div className='directory-menu'>
      <MenuItem_36
        name='Hats'
        remoteUrl='https://i.ibb.co/cvpntL1/hats.png'
        size=''
      />
      <MenuItem_36
        name='jackets'
        remoteUrl='https://i.ibb.co/px2tCc3/jackets.png'
        size=''
      />
      <MenuItem_36
        name='sneakers'
        remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png'
        size=''
      />
      <MenuItem_36
        name='womens'
        remoteUrl='https://i.ibb.co/GCCdy8t/womens.png'
        size='large'
      />
      <MenuItem_36
        name='mens'
        remoteUrl='https://i.ibb.co/R70vBrQ/men.png'
        size='large'
      />
    </div>
  );
};

export default Directory_36;
```

```js
Menuitem;
import React from 'react';
import './Menultem_36.scss';

const MenuItem_36 = ({ name, remoteUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <img className='background-image' src={remoteUrl} alt='' />
      <a href='./hats.html' className='content'>
        <h1 className='title'>{name}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_36;
```

#P3
![](https://i.imgur.com/TbjfTWl.jpg)

```js
json陣列;

const items = [
  {
    id: 1,
    name: 'HATS',
    remoteUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    size: '',
  },

  {
    id: 2,
    name: 'JACKETS',
    remoteUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    size: '',
  },
  {
    id: 3,
    name: 'SNEAKERS',
    remoteUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    size: '',
  },
  {
    id: 4,
    name: 'WOMENS',
    remoteUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
  },
  {
    id: 5,
    name: 'MENS',
    remoteUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
  },
];

export default items;
```

```js
directory;

import React, { useState } from 'react';
import './Directory_36.scss';
import MenuItem_36 from './Menultem_36';
import items from './menu-items-data';

const Directory_36 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);

  return (
    <div className='directory-menu'>
      {menuItems.map((item) => {
        const { id, name, remoteUrl, size } = item;
        return (
          <MenuItem_36 id={id} name={name} remoteUrl={remoteUrl} size={size} />
        );
      })}
    </div>
  );
};

export default Directory_36;
```
