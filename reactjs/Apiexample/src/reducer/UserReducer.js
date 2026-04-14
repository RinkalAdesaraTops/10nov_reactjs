import React from 'react'
import { createStore } from 'redux'
import { del, ins, upd } from '../action/Useraction'
const initialState = {
    data:[],
    emp:[],
    user:[]
}
const UserReducer = (state=initialState,action)=>{
    switch(action.type){
        case ins: return {
            ...state,
            data:[
                ...state.data,
                action.payload
            ]
        }
        case del:return {
                ...state,
                data:state.data.filter((i,index)=>{
                    return index != action.payload
                })
        }
        case upd:return {
            ...state,
            data:state.data.map((i,index)=>{
                    if(index==action.payload.id){
                        i = action.payload.data
                    }
                return i
            })
        }
        default:return state
    }
}
export default UserReducer
