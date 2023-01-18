import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";


const Mudarpedido = () => {

    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [estilo, setEstilo] = useState();
    const [desenho, setDesenho] = useState();
    const [cor, setCor] = useState()
    const [local, setLocal] = useState()


    const mudePedido = async (e) => {
        e.preventDefault()
        await blogFetch.patch(`/pedidos/${id}`, {
            nome: nome,
            estilo: estilo,
            desenho: desenho,
            cor: cor,
            local: local,

        })
            .then((sucesso) => { console.log(sucesso) })
        console.log("funcionou")
    }

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await blogFetch.get('/pedidos');
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

    const excluir = async (id) =>{

        await blogFetch.delete(`/pedidos/${id}`)
        .then((sucesso) => { console.log(sucesso) })
        console.log("funcionou")
    }

    return (
        <div>
            <h2 className='destaque destaque3'>Errou o pedido? Mude ele aqui:</h2>

            {/* <form>
                <label htmlFor="title">Nome:</label>
                <input type="text" name='title' id='title' placeholder='digite o que voce deseja' onChange={(e) => setNome(e.target.value)} />
            </form> */}

            <form onSubmit={(e) => mudePedido(e)} className="formularios">

                <div className="form-control2">
                    <label htmlFor="title">Numero do pedido:</label>
                    <input type="text" name='title' id='title' placeholder='digite o que voce deseja' onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="form-control2">
                    <label htmlFor="title">Nome:</label>
                    <input type="text" name='title' id='title' placeholder='digite o que voce deseja' onChange={(e) => setNome(e.target.value)} />
                </div>
                {/* <div className="form-control2">
                    <label htmlFor="preçoEstilo">Estilo:</label>
                    <input type="text" name='preçoEstilo' id='preçoEstilo' placeholder='digite o que voce deseja'  />
                </div> */}
                <div className="form-control2">
                <label htmlFor="preçoEstilo">Estilo:</label>
                    <select defaultValue name="preçoEstilo" id="preçoEstilo" onChange={(e) => setEstilo(e.target.value)}>
                    <option value="">Selecione</option>
                        <option>Old School</option>
                        <option>Maori</option>
                        <option>Minimalista</option>
                        <option>Realista</option>
                        <option>Pontilhismo</option>
                        <option>Blackwork</option>
                        <option>Geométrico</option>
                        <option>Single Line</option>
                        <option>Glitch</option>
                        <option>Outros</option>
                    </select>
                </div>
                <div className="form-control2">
                    <label htmlFor="tipoPedido">Desenho:</label>
                    <input type="text" name='tipoPedido' id='tipoPedido' placeholder='digite o tipo' onChange={(e) => setDesenho(e.target.value)} />
                </div>
                <div className="form-control2">
                    <label htmlFor="imagemPedido">Cor:</label>
                    <input type="text" name='imagemPedido' id='imagemPedido' placeholder='digite o que voce deseja' onChange={(e) => setCor(e.target.value)} />
                </div>
                <div className="form-control2">
                    <label htmlFor="localPedido">Local:</label>
                    <input type="text" name='localPedido' id='localPedido' placeholder='digite o que voce deseja' onChange={(e) => setLocal(e.target.value)} />
                </div>
                <input type="submit" value="Enviar pedido" className='btn envio' />
            </form>


            <h1 className='destaque destaque3'>Agendados</h1>
            
        {posts.length === 0 ? <div className='centralizar'> <span className="loader"></span></div> : (
        posts.map((equipaments) => (
            <div className='post' key={equipaments.id}>
                <h2>{ }</h2>
                <div className="tabela">
                    <div className="informacoes">
                        <h1>Nome: {equipaments.nome}</h1>
                         <h2>Numero do pedido: N°{equipaments.id}</h2>
                        <p>Estilo: {equipaments.estilo}</p>
                        <p>Desenho: {equipaments.desenho}</p>
                        <p>Cor: {equipaments.cor}</p>
                        <p>Local: {equipaments.local}</p>
                        <button className="btn envio" onClick={() => excluir(equipaments.id)}>Excluir</button>
                    </div>
                </div>
            </div>
        ))
    )}

<div className="espaço"></div>
        </div>
    )
}

export default Mudarpedido
