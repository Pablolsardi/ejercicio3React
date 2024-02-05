import React, { useState } from 'react';

const Saludo = ({particularizacion}) => {

    const [mensaje, setMensaje] = useState(`Hello ${particularizacion}`);

    return (
        <>
            <h1>{mensaje}</h1>

            <button onClick={() => setMensaje(`Hello ${particularizacion} (from changed state)`)}>
                Actualizar
            </button>
        </>

    );
};

export default Saludo;