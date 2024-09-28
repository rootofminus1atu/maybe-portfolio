import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      [FIXED_CONTENT]

      <nav>
        <Link to="/maybe-portfolio/">Home</Link>
        {" | "}
        <Link to="/maybe-portfolio/about">About</Link>
      </nav>

      <Outlet />

      [FIXED_CONTENT]
    </>
  )
}

export default App
