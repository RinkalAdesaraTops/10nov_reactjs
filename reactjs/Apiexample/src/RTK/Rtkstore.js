import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import Rtkreducer from './Rtkreducer'

const Rtkstore = configureStore({
    reducer:{
        "Emp":Rtkreducer
    }
})
export default Rtkstore
