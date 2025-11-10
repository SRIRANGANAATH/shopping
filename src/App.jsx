import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Menu from './menu.jsx'
import Buynow from './Buynow'

function App() {
  return (
    <>
      <header style={{ padding: 12 }}>
        <Link to="/" style={{ marginRight: 12 }}>Menu</Link>
        <Link to="/cart">Cart</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Buynow />} />
        </Routes>
      </main>
    </>
  )
}

export default App

