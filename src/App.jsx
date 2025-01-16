import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Home/>

      <footer className='bg-gray-800 text-white p-4 mt-auto text-center'>
        <p>© 2025 AI Photo App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
