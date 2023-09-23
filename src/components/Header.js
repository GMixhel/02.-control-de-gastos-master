import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto';
import ControlGastos from './ControlGastos';


const Header = ({presupuesto, setPresupuesto, setIsValidPresupuesto, isValidPresupuesto, gastos, setGastos}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlGastos
          setIsValidPresupuesto={setIsValidPresupuesto}
          setPresupuesto={setPresupuesto}
          setGastos={setGastos}
          presupuesto={presupuesto}
          gastos={gastos}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
}

export default Header