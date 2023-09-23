import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import Modal from '../components/Modal';
import { generarId } from '../Helpers';
import ListadoGastos from '../components/ListadoGastos';
import Filtros from '../components/Filtros';

const Home = () => {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
  
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? ''
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal ] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')

  const [gastosFiltrados, setGastosFiltrados] = useState([])
  
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 400);
    }
  }, [gastoEditar]);  

  useEffect(() => {
   localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
    
  }, [gastos])
  

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? '')
  },[presupuesto])
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? '';

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])
  
  useEffect(() => {
    if (filtro) {
      //Filtro Gastos

      const Filtrados = gastos.filter(gasto => gasto.categoria === filtro)

   setGastosFiltrados(Filtrados)
    }
  }, [filtro])
  
   

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
          setAnimarModal(true)
        }, 400);
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastoActualizado)
        setTimeout(() => {
         setGastoEditar({});
        }, 500);
     
    } else {
      //generando ID
      gasto.id = generarId();
      setGastos([...gastos, gasto]);
      //Fecha en la que se genera el objeto gasto
      gasto.fecha = Date.now();
    }

    //Cerrando modal con transitions
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)

    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filter={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              gastos={gastos}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          guardarGasto={guardarGasto}
          animarModal={animarModal}
          setModal={setModal}
          setAnimarModal={setAnimarModal}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default Home