import React, { useState } from "react";

const Empcomponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [alldata, setAllData] = useState([]);
  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
        let res = alldata.map((i,index)=>{
                    if(index==id){
                        i.name = name
                        i.age = age
                    }
                    return i
        })
        setAllData(res)
    } else {
      setAllData([
        ...alldata,
        {
          name: name,
          age: age,
        },
      ]);
    }
    setName('')
    setAge('')
    setId('')
  };
  const delData = (id) => {
    // let res = alldata.splice(id,1)
    let res = alldata.filter((i, index) => {
      return index != id;
    });
    setAllData(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => {
      return index == id;
    });
    setName(res.name);
    setAge(res.age);
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Empcomponent;
