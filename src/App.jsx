import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import 'primeicons/primeicons.css' 
import Sidebar from './components/Sidebar/sidebar'
import Header from './components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />
        <div className="content">
      
        </div>
      </div>
    </div>
    </>
  )
}

export default App
