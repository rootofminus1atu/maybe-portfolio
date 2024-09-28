import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/maybe-portfolio/",
    element: <App />,
    children: [
      {
        path: "/maybe-portfolio/",
        element: <Home />,
      },
      {
        path: "/maybe-portfolio/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
