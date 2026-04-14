import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFun, deleteFun, updateFun } from './RTK/Rtkreducer';

const RtkCRUDComponent = () => {
     const [data, setData] = useState({
        name: "",
        age: "",
      });
      const [id, setId] = useState("");
      const alldata = useSelector((state)=>state.Emp.data)
      const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };
      const dispatch = useDispatch()
      const saveData = (e)=>{
        e.preventDefault()
        // dispatch(updFun(id,data))
        if(id!==''){
          dispatch(updateFun({id,data}))
        } else {
          dispatch(addFun(data))
        }
        setId('')
        setData({
          name:'',
          age:''
        })
      }
      const editData = (id)=>{
          let res = alldata.find((i,index)=> index==id)
          setData(res)
          setId(id)
      }
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        Age:
        <input
          type="text"
          name="age"
          id=""
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        <input type="submit" value={"Save"} />
        <br />
        <br />
      </form>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i,index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={()=>editData(index)}>Edit</button>
                  <button onClick={()=>dispatch(deleteFun(index))}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RtkCRUDComponent
