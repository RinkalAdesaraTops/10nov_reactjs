import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercomponent from './Usercomponent'
import Empcomponent from './Empcomponent'
import RtkCRUDComponent from './RtkCRUDComponent'
import FirebaseCrudComponent from './FirebaseCrudComponent'

function App() {
  return (
    <>
      {/* <Usercomponent /> */}
      {/* <Empcomponent /> */}
      {/* <RtkCRUDComponent /> */}
      <FirebaseCrudComponent />
    </>
  )
}

export default App
