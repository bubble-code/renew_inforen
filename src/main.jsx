import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'
import './index.css'
import AuthProvider from './routers/authProvider'
import { Provider } from 'react-redux'
import store from './redux/store'
import {LocationProvider} from './Contex/locationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <LocationProvider>
        <RouterProvider router={router} />
      </LocationProvider>
    </AuthProvider>
  </Provider>
)
