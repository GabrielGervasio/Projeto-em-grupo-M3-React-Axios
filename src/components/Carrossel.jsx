import React from 'react'

import iconMaquina from '../imagens/icons/maquina-de-tatuagem.png';
import cadeira from '../imagens/icons/cadeira.png';
import segurança from '../imagens/icons/segurança.png';
import estudio from '../imagens/icons/estudio-de-tatuagem.png';

import './Carrossel.css'
const Carrossel = () => {
  return (
    <div>
      <div className="produtos">
        <div className="icon-maquina">
        <img src={iconMaquina} alt="" className="icon"/>
        <p className='cor'>Ferramentas de alta qualidade</p>
        </div>
        <div className="icon-maquina">
          <img src={segurança} alt="" className="icon"/>
          <p className='cor'>Uso de produtos EPI</p>
        </div>
        <div className="icon-maquina">
          <img src={estudio} alt="" className="icon"/>
          <p className='cor'>Intala<span id="erro">çõ</span>es modernas e preparadas</p>
        </div>
        <div className="icon-maquina">
          <img src={cadeira} alt="" className="icon"/>
          <p className='cor'>Seu conforto sempre garantido</p>
        </div>
      </div>

    </div>
  )
}

export default Carrossel