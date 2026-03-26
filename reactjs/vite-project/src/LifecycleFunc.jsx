import React, { useEffect, useState } from 'react'

const LifecycleFunc = () => {
    let [name,setName] = useState("abc")
    useEffect(()=>{
        setTimeout(()=>{
            setName("test")
        },2000)
    },[])
  return (
    <div>
      <h3>Name is -- {name}</h3>
    </div>
  )
}

export default LifecycleFunc
