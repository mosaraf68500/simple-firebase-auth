import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './componets/Root/Root.jsx'
import Home from './componets/Home/Home.jsx'
import Login from './componets/Login/Login.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[

      {
        index:true,Component:Home
      },

      {

        path:'login',
        Component:Login,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
