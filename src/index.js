import React, {useState} from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

const Counter = () => {

    // A esto se le conoce como un estado
    //      Variable, Función
    const [ counter, setCounter ] = useState(0);//Se debe poner dentro del useState el valor con el que se quiere inicializar

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>{
                setCounter( counter + 1);
            }}>
                Sumar
            </button>

            <button onClick={()=>{
                setCounter( counter - 1);
            }}>
                Restar
            </button>

            <button onClick={()=>{
                setCounter( 0 );
            }}>
                Reiniciar
            </button>
        </div>
    );
}

root.render(<>
    <Counter />
</>);