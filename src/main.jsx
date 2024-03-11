import React from 'react'
import ReactDOM from 'react-dom/client'
import Twitter from './App.jsx'
import Home  from './pages/home.jsx'
import Layout from './components/layout/layout.jsx'
import Profile from './pages/profile.jsx'
import ErrorPage from './pages/error-page.jsx'
// import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
  path:'/',
  element: <Layout />,
  errorElement:<ErrorPage />,
  children:[
    {
      path:'/',
      element: <div><Home /></div>
    },
    {
      path:'/user/:username',
      element: <Profile />,
    },
  ]
  },



])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
