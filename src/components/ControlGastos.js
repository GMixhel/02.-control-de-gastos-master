import React from 'react'

const ControlGastos = ({ presupuesto }) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-ES', {
            style: 'currency',
            currency: 'EUR'
        })
    }

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <p>Grafica aquí</p>
        </div>

        <div className="contenido-presupuesto">
          <p>
            <span>Presupuesto:</span> {formatearCantidad(Number(presupuesto))}
          </p>
          <p>
            <span>Disponible:</span> {formatearCantidad('0')}
          </p>
          <p>
            <span>Gastado:</span> {formatearCantidad('0')}
          </p>
        </div>
      </div>
    </>
  );
};

export default ControlGastos