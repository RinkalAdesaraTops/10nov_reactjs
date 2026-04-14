import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data:[]
}
const Rtkreducer = createSlice({
    name:"Emp",
    initialState,
    reducers:{
        addFun:(state,action)=>{
                state.data = [
                    ...state.data,
                    action.payload
                ]
        },
        deleteFun:(state,action)=>{
            state.data = state.data.filter((i,index)=>index != action.payload)
        },
        updateFun:(state,action)=>{
            state.data = state.data.map((i,index)=>{
                    if(index==action.payload.id){
                        i=action.payload.data
                    }
                    return i
            })
        }
    }
})
export const {addFun,deleteFun,updateFun} = Rtkreducer.actions
export default Rtkreducer.reducer
