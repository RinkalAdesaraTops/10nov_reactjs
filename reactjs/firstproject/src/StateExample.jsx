import React, { useState } from 'react'
import styled from 'styled-components'
import mystyle from './mystyle.module.css'
// hooks = useState
const StateExample = () => {
    const [count,setCount] = useState(0)
    const addCounter = ()=>{
        setCount(count+1)
    }
    let H3 = styled.h3 `
            color:red;
            background-color:yellow;`
  return (
    <div>
      <H3>State Example</H3>
      <h3>Props example</h3>
      <h4>Count is -- {count}</h4>
      <button onClick={addCounter}>Add</button>
      <button onClick={()=>setCount(count-1)}>Minus</button>
      <div className={mystyle.box}>
        
      </div>
    </div>
  )
}

export default StateExample
