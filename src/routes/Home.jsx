import React from 'react'

import './Home.css'

import PNG from '../imagens/carrossel2.jpg';
import PNG2 from '../imagens/carrossel1.png';
import PNG3 from '../imagens/carrossel3.png';
import iconMaquina from '../imagens/icons/maquina-de-tatuagem.png';
import cadeira from '../imagens/icons/cadeira.png';
import segurança from '../imagens/icons/segurança.png';
import estudio from '../imagens/icons/estudio-de-tatuagem.png';
import Carrossel from '../components/Carrossel'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={PNG2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={PNG} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={PNG3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<Carrossel />
{/* <div class="produtos">
        <div class="icon-maquina">
        <img src={iconMaquina} alt="" class="icon"/>
        <p>Ferramentas de alta qualidade</p>
        </div>
        <div class="icon-maquina">
          <img src={segurança} alt="" class="icon"/>
          <p>Uso de produtos EPI</p>
        </div>
        <div class="icon-maquina">
          <img src={estudio} alt="" class="icon"/>
          <p>Intala<span id="erro">çõ</span>es modernas e preparadas</p>
        </div>
        <div class="icon-maquina">
          <img src={cadeira} alt="" class="icon"/>
          <p>Seu conforto sempre garantido</p>
        </div>
      </div> */}


    </div>

    
  )
}

export default Home
