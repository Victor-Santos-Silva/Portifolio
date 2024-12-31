import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home.jsx'
import AboutMe from './views/AboutMe/AboutMe.jsx'
import Projects from './views/Projects/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutme",
    element: <AboutMe />
  },
  {
    path: "/projects",
    element: <Projects />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

