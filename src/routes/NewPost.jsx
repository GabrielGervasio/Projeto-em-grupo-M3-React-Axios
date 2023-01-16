import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./NewPost.css";
const NewPost = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await blogFetch.get('/Tatuagens');
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

    return <div>
        <div className="destaque">
        <h1 className='destaque2'>Tatuagens</h1>
        <h2 className="destaque3">Aqui temos alguns exemplos tatuagens de varios estilos feito por nossos tatuadores</h2>
        </div>
        {posts.length === 0 ? <div className='centralizar'> <div className="loader"></div></div> : (
            posts.map((equipaments) => (
                <div className='post' key={equipaments.id}>
                    <h2>{ }</h2>
                    <div className="tabela">
                        <div>
                        <img src={equipaments.imagem} alt="" className='img' />
                        
                        </div>
                        <div className="informacoes">
                            <h2>Desenho: {equipaments.desenho}</h2>
                            <p>Estilo: {equipaments.estilo}</p>
                            <p>Cor: {equipaments.cor}</p>
                            
                        </div>
                        
                    </div>
                </div>
            ))
        )}

    </div>

}

export default NewPost
