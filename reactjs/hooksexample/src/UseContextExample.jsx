import React, { useState,createContext, useContext } from 'react'
const Userdata = createContext()
const UseContextExample = () => {
    let data = {
        name:"sdfsd",
        age:24
    }
   let [name,setName] = useState("Test123")
   let [age,setAge] = useState("Test123")
    return (
      <div>
        <h3>Component - 1 called...</h3>
        <h4>Name is - {name}</h4>
        <Userdata.Provider value={data}>
            <Component2/>
        </Userdata.Provider>
      </div>
    )
}
const Component2 = ()=>{
    return (
        <div>
            <h3>Component - 2 called...</h3>  
            <Component3 />    
        </div>
    )
}
const Component3 = ()=>{
    return (
        <div>
            <h3>Component - 3 called...</h3> 
            <Component4/>     
        </div>
    )
}
const Component4 = ()=>{
    let {name,age} = useContext(Userdata)
    return (
        <div>
            <h3>Component - 4 called...</h3> 
            <h4>Final name is -- {name}</h4>     
            <h4>Final Age is -- {age}</h4>     
        </div>
    )
}

export default UseContextExample
