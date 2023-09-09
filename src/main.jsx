import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Duvidas from './routes/Duvidas/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'
import Seguro from './routes/Seguro/index.jsx'
import Cadastro from './routes/Cadastro/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/duvidas',
        element: <Duvidas/>
      },
      {
        path: '/integrantes',
        element: <Integrantes/>
      },
      {
        path: '/seguro',
        element: <Seguro/>
      },
      {
        path: '/seguro/cadastro',
        element: <Cadastro/>
      },
      
      {
        path: '/seguro/cadastro/vistoria/:id',
        element: <Vistoria/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
