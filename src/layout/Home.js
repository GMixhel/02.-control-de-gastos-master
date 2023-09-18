import React, { useState } from 'react'
import Header from '../components/Header';
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import Modal from '../components/Modal';

const Home = () => {
  const [presupuesto, setPresupuesto] = useState('');
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal ] = useState(false)
  const [animarModal, setAnimarModal ] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
          setAnimarModal(true)
        }, 400);
  }


  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="icono nuevo gasto"  onClick={handleNuevoGasto}/>
        </div>
      )}

      {modal && <Modal animarModal={animarModal} setModal={setModal} setAnimarModal={ setAnimarModal} />}
    </>
  );
}

export default Home