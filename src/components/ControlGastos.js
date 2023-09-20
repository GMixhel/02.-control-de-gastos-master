import React, { useEffect, useState } from 'react'

const ControlGastos = ({ presupuesto, gastos }) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    console.log(gastos)
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

    const totalDisponible = presupuesto - totalGastado;

    setGastado(totalGastado)
    setDisponible(totalDisponible)
  }, [gastos])
  


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
            <span>Disponible:</span> {formatearCantidad(disponible)}
          </p>
          <p>
            <span>Gastado:</span> {formatearCantidad(gastado)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ControlGastos