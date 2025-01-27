import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FrangmentDemo from './fragments'
import Frangmentlist from './fragments1'
import PortalDemo from './portaldemo'
import UncontrolledForm from './uncontrolled'
import Control from './controlled'
import Counter from './statehook'
import Count from './effect'
import Context from './context'
import App1 from './useref'
import App2 from './usereducer'
import Layout from './uselayouteffect'
import Memo from './usememo'
import ParentComponent from './usecallback'
import StatusBar from './custom'
import useFetch from './custom'

export const Contexts=createContext();
function App() {
  const [count, setCount] = useState(0)
  const data = useFetch("https://jsonplaceholder.typicode.com/users")
  const value='hello';

  return (
    <>
      <FrangmentDemo/>
      <Frangmentlist/>
      <PortalDemo/>
      <UncontrolledForm/>
      <Control/>
      <Counter/>
      <Count/>
      <Context/>
      <App1/>
      <App2/>
      <Layout/>
      <Contexts.Provider value={value}>
      <Memo value={value}/>
      </Contexts.Provider>
      <ParentComponent/>
      <StatusBar/>

      {data.map((res) => {
        return (
          <h4 key={res.id}>{res.id}.{res.name}</h4>
        )
      })}


    </>
  )
}

export default App