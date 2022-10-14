import React from 'react';
import ReactDom from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import Saludar from './Saludar';
import Post from './Posts';

const root = ReactDom.createRoot(document.getElementById('root'));

const users = [
    {
        id: 1,
        name: 'Ryan ray',
        image: 'https://robohash.org/user1',
    },
    {
        id: 2,
        name: 'Joe',
        image: 'https://robohash.org/user2',
    },
    {
        id: 3,
        name: 'Marcos',
        image: 'https://robohash.org/user3',
    },
];

root.render(<>
    {users.map((user, index) => {
        return <div key={index}>
            <h1>{user.name}</h1>
            <img src={user.image}/>
        </div>;
    })}
    {/* <Post /> */}
</>);