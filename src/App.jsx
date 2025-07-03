import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Homepage from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage/>
    
    </>
  )
}

export default App
