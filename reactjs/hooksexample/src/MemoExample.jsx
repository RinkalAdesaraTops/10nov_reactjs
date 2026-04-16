import React, { useMemo, useState } from 'react'

const MemoExample = () => {
    //   returns memoized value
// to prevent/freeze unnecessary value
    const [count,setCount] = useState(10)
    const [num,setNum] = useState(10)
    let addCalc=(count)=>{
        console.log('add calc func called..');   
        for(let i=0;i<=10000;i++){
            count+=i
        }
        return count
    }
    let calc = useMemo(()=>{
        return addCalc(count)
    },[count])
    const addCount = ()=>{
        console.log('add count func called..');
        setCount(count+1)
    }
    const addNum = ()=>{
        console.log('add num func called..');
        setNum(num+2)
    }
    
  return (
    <div>
        <h3>Calc is -- {calc}</h3>
        <h4>Count is -- {count}</h4>
        <button onClick={addCount}>Add Count</button>
        <h4>Number is -- {num}</h4>
        <button onClick={addNum}>Add Number</button>
        
    </div>
  )
}

export default MemoExample
