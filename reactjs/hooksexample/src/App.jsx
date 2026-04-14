import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Refexample from './Refexample'
import ContextExample from './ContextExample'
import UseContextExample from './UseContextExample'
import UserCrud from './UserCrud'

function App() {
  return (
    <>
      <h3>Hooks Example</h3>
      {/* <Refexample /> */}
      {/* <ContextExample /> */}
      {/* <UseContextExample /> */}
      <UserCrud />
    </>
  )
}

export default App
