import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassExample from './ClassExample'
import LifecycleClass from './LifecycleClass'
import LifecycleFunc from './LifecycleFunc'
import CrudTest from './CrudTest'
import Empcomponent from './Empcomponent'
import Usercomponent from './Usercomponent'




function App() {
  let [num,setNum] = useState(0)
  const addCounter = ()=>{
      setNum(num+1)
  }
  return (
    <>
    <Usercomponent />
    {/* <Empcomponent /> */}
   {/* <LifecycleClass /> */}
    {/* <LifecycleFunc /> */}
    {/* <ClassExample name={"abcd"}/> */}
     {/* <h2>React Vite Project</h2>
     <h3>Number is -- {num}</h3>
     <button onClick={addCounter}>Add</button>
     <button onClick={()=>setNum(num-1)}>Minus</button> */}
     {/* <CrudTest /> */}
    </>
  )
}
export default App
