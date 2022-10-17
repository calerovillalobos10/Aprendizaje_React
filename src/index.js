import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

const Counter = () => {

    // A esto se le conoce como un estado
    //      Variable, Función
    const [mensaje, setMensaje] = useState('');//Se debe poner dentro del useState el valor con el que se quiere inicializar
    const [counter, setCounter] = useState(0);
    // El use efect siempre se ejecuta cuando hay un cambio en el componente
    // Espera por parámetro una función
    useEffect(() => {
        console.log('Render');
    }, [counter]); // El arreglo vacío funciona para que se ejecute una sola vez
    // El  [counter] es una dependencia

    return (
        <div>
            <input onChange={event => setMensaje(event.target.value)} />
            <button onClick={() => {
                alert('El mensaje es: ' + mensaje);
            }}>
                Save
            </button>

            <hr />

            <h1>Counter: {counter}</h1>
            <button onClick={() => { setCounter(counter + 1) }}>
                Incrementar
            </button>
        </div>
    );
}

root.render(<>
    <Counter />
</>);