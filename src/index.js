import React, {useState} from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

const Counter = () => {

    // A esto se le conoce como un estado
    //      Variable, Función
    const [ mensaje, setMensaje ] = useState('');//Se debe poner dentro del useState el valor con el que se quiere inicializar

    return (
        <div>
            <input onChange={ event => setMensaje(event.target.value)}/>
            <button onClick={ () => {
                alert('El mensaje es: ' + mensaje);
            }}>
                Save
            </button>
        </div>
    );
}

root.render(<>
    <Counter />
</>);