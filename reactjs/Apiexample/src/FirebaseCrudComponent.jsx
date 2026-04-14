import React, { useState,useEffect } from "react";
import { addDoc, collection,query,onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
const FirebaseCrudComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [alldata, setAllData] = useState([]);
  const [id, setId] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = async(e) => {
    e.preventDefault();
    if(id!=''){
      await updateDoc(doc(db,"empDb",id),data)
    } else {
      await addDoc(collection(db,"empDb"),data)
    }
    setId('')
    setData({
      name:'',
      age:''
    })
  };
  useEffect(() => {
    const q = query(collection(db, 'empDb'))
    onSnapshot(q, (i) => {
      setAllData(i.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  },[])
  const editData = async(id) => {
    let res = await getDoc(doc(db,"empDb",id))
    setData(res.data())
    setId(id)
  };
  const delData = async(id) => {
    await deleteDoc(doc(db,"empDb",id))
  };
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
        Age:
        <input
          type="number"
          name="age"
          id=""
          onChange={handleChange}
          value={data.age}
        />
        <input type="submit" value={"Save"} />
      </form>
      <br />
      <br />
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
          {alldata.map((i) => {
            return <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={()=>editData(i.id)}>Edit</button>
                  <button onClick={()=>delData(i.id)}>Delete</button>
                </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FirebaseCrudComponent;
