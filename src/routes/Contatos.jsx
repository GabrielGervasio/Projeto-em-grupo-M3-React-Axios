import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import logo from "../imagens/sem.png"

import "./Contatos.css"

const Contatos = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
      try {
          const response = await blogFetch.get('/funcionario');
          const data = response.data;
          console.log(data)

          setPosts(data);
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {

      getPosts()

  }, []);

  
  return (
    <div><h1 className='destaque'> <div className="foto2"> <img src={logo} alt="" id="foto" /> <h1 className="foto3">Funcionarios</h1></div></h1>
    {posts.length === 0 ? <div className='centralizar'> <span className="loader"></span></div> : (
        posts.map((equipaments) => (
            <div className='post' key={equipaments.id}>
                <h2>{ }</h2>
                <div className="tabela">
                    <img src={equipaments.imagem} alt="" className='img' />
                    <div className="informacoes">
                        <h2>Nome: {equipaments.nome}</h2>
                        <p>Cargo: {equipaments.cargo}</p>
                        <p>Idade: {equipaments.idade}</p>
                    </div>
                </div>
            </div>
        ))
    )}
    <div className="espaço"></div>
    </div>
  )
}

export default Contatos