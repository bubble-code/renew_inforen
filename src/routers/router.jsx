import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Hoy from '../pages/Hoy'
import Cargar from '../pages/Cargar'
import Login from '../pages/Login'
import Historial from '../pages/Historial'
import Busqueda from '../pages/Busqueda'
import ErrorPage from './error-page'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'hoy',
                element: <Hoy />
            },
            {
                path: 'cargar',
                element: <Cargar />
            },
            {
                path: 'historial',
                element: <Historial />
            },
            {
                path: 'busqueda',
                element: <Busqueda />
            }
        ]
    }
])