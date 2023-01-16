import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'


//paginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Contatos from './routes/Contatos';
import Pedidos from './routes/Pedidos';
import Mudarpedido from './routes/Mudarpedido';

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/tatuagens",
        element: <NewPost />,
      },
      {
        path:"/contatos",
        element: <Contatos />
      },
      {
        path:"/pedidos",
        element: <Pedidos />
      },
      {
        path:"/mudarpedido",
        element: <Mudarpedido />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
