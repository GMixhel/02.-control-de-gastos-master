import React, { useState } from 'react'
import Mensaje from './Mensaje';

export const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState();

  const handlerPresupuesto = (e) => {
    e.preventDefault();

    //Validación de numero mayor que 0
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto válido");

      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true)
  };

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlerPresupuesto} className="formulario">
          <div className="campo">
            <label>Definir Presupuesto</label>
            <input
              className="nuevo-presupuesto"
              type="text"
              placeholder="Añade tu presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
            />
          </div>

          <input type="submit" value="Añadir" />

          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      </div>
    </>
  );
};
