import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlGastos = ({ presupuesto, gastos }) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    console.log(gastos)
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

    const totalDisponible = presupuesto - totalGastado;

    setGastado(totalGastado)
    setDisponible(totalDisponible)

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
    
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
          <CircularProgressbar
            styles={buildStyles({
              pathColor: '#3b82f6',
              trailColor: '#f5f5f5'
            })}
            value={porcentaje}
          />
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