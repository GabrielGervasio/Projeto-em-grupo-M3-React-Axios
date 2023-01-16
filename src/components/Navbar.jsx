import { Link } from "react-router-dom"

import "./Navbar.css";

const Navbar = () => {
  return (
   <nav className='navbar'>
       <h2>
           <Link to={'/'} className='nome'>Mokas Tatoo</Link>
       </h2>
       <ul >
           <li>
               <Link to={'/'} >Home</Link>
           </li>
           <li>
               <Link to={'/tatuagens'} className="new-btn">
                   Tatuagens
               </Link>
           </li>
           <li>
           <Link to={'/pedidos'}>Agende sua Tatoo</Link>
           </li>
           <li>
            <Link to={'/mudarpedido'}>Algum Problema?</Link>
           </li>
           <li>
            <Link to={'/contatos'}>Fale Conosco</Link>
           </li>
           
       </ul>
       <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
   </nav>
  )
}

export default Navbar
