import React from 'react';
import ReactDom from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<>

    <TaskCard ready={false}/>

    {/* <Button text='Click me' name='Thomas'/>
    <Button text='Pay'/>
    <Button text='Go to'/> */}

    {
        /* <Greeting title='Hola Mundo' name='Joe' />
        <Greeting title='Hola React' name='Bryan' />
        <Greeting title='Hola JSX' />
        <Greeting title='Hola JavaScript' />
        <UserCard
            name='Ryan Ray'
            amount={3000}
            married={true}
            points={[99, 33.3, 22.2]} 
            address={{ street: '123 Main Street', city: 'New York' }} 
            greet = { () => { alert('Hola') } }/>
        <UserCard
            name='Joe Mcmillan'
            amount={1000}
            married={true}
            points={[100, 20]} 
            address={{ street: 'av some 123', city: 'New York' }} />
        <Product /> */
    }
</>);