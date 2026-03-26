import React from 'react'

const Secondcomponent = () => {
    const abc = {
        color:"blue",
        backgroundColor:"grey"
    }
  return (
    <>
    <div>
        <hr />
        <h3 style={{color:"red",backgroundColor:"greenyellow",fontSize:"25px"}}>Hello</h3>
        <h4 style={abc}>styuirt gdjdgf</h4>
        <h4 className='xyz'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe voluptas, unde culpa quos id voluptatem? Excepturi itaque, doloribus ut veritatis, eum, magnam provident ad est sunt vero pariatur odio!</h4>
    </div>
    </>
  )
}

export default Secondcomponent
