import React from 'react'
import { useState } from 'react'

const CrudTest = () => {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[salary, setSalary] = useState("");
    const[alldata, setAllData] = useState([]);
    const savedtata =()=>{         
    }
  return (
    <div>
      <form action="#" method="post" onSubmit={savedtata}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="" onChange={(e)=>{setName(e.target.value)}}/><br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="" onChange={(e)=>{setAge(e.target.value)}}/><br /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary " id="" onChange={(e)=>{setSalary(e.target.value)}}/><br /><br />
        <input type="submit" value="Save" /><br /><br />
      </form>
      <table border={2} width={600}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default CrudTest
