import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import { Login } from './login/components/Login';
import { Navbar } from './components/Navbar';
import { Estructura } from './components/Estructura';

const routes = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [

      {
        path: '/',
        element: <Login />
      },
      // {
      //   path: '',
      //   element: <CreateUser />
      // },
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '',
            element: <Estructura />
          }
        ]
      },
      // {
      //   path: '/',
      //   element: <Logup />
      // },

      // {
      //  path: '/facturas',
      //  element: <FacturaVista/>
      // }

    ]


  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)