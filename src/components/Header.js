import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto';
import ControlGastos from './ControlGastos';


const Header = ({presupuesto, setPresupuesto, setIsValidPresupuesto, isValidPresupuesto, gastos}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlGastos presupuesto={presupuesto} gastos={gastos} />
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