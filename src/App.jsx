import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import GeneratePhoto from "./pages/GeneratePhoto";
import RemoveBackground from "./pages/RemoveBackground";


function App() {

  return (
    <Router>
      <div>
      <NavBar/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/generate-photo" element={<GeneratePhoto/>}/>
          <Route path='/remove-background' element={<RemoveBackground/>}/>
        </Routes>
      </main>
      <footer className='bg-gray-800 text-white p-4 mt-auto text-center'>
        <p>© 2025 AI Photo App. All rights reserved.</p>
      </footer>
    </div>
    </Router>
    
  )
}

export default App
