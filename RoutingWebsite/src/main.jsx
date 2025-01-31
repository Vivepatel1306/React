import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import './index.css'
import Contact from './components/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "About",
      element: <About />
    },
    {
      path: "Contact",
      element: <Contact />
    }
      ,
    {
      path: "User",
      element: <User />
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
