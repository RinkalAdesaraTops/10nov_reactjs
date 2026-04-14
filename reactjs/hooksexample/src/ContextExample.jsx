import React, { useState } from 'react'
// Props drilling problem = useContext hooks 
const ContextExample = () => {
    let [name,setName] = useState("Test123")
  return (
    <div>
      <h3>Component - 1 called...</h3>
      <h4>Name is - {name}</h4>
      <Component2 name={name}/>
    </div>
  )
}
const Component2 = ({name})=>{
    return (
        <div>
            <h3>Component - 2 called...</h3>  
            <Component3 name={name} />    
        </div>
    )
}
const Component3 = ({name})=>{
    return (
        <div>
            <h3>Component - 3 called...</h3> 
            <Component4 name={name}/>     
        </div>
    )
}
const Component4 = ({name})=>{
    return (
        <div>
            <h3>Component - 4 called...</h3> 
            <h4>Final name is -- {name}</h4>     
        </div>
    )
}

export default ContextExample
