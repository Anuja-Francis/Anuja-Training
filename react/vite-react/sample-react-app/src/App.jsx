import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrangmentDemo from './fragments'
import Frangmentlist from './fragments1'
import PortalDemo from './portaldemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FrangmentDemo/>
      <Frangmentlist/>
      <PortalDemo/>
    </>
  )
}

export default App
