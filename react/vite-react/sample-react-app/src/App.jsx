import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FrangmentDemo from './fragments'
import Frangmentlist from './fragments1'
import PortalDemo from './portaldemo'
import UncontrolledForm from './uncontrolled'
import Control from './controlled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FrangmentDemo/>
      <Frangmentlist/>
      <PortalDemo/>
      <UncontrolledForm/>
      <Control/>
    </>
  )
}

export default App
