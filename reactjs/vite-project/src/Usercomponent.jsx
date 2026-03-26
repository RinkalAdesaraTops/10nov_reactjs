import React, { useState } from "react";

const Usercomponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [id, setId] = useState("");
  const [alldata, setAllData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    // const n = e.target.name
    // const v = e.target.value
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      let res = alldata.map((i,index)=>{
                    if(index==id){
                        i = data
                        // i.name = data.name
                        // i.age = data.age
                    }
                    return i
        })
        setAllData(res)
    } else {
      setAllData([...alldata, data]);
    }

    setData({
      name: "",
      age: "",
    });
  };
  const delData = (id) => {
    let res = alldata.filter((i, index) => {
      return index != id;
    });
    setAllData(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => {
      return index == id;
    });
    setData(res);
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
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handleChange}
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

export default Usercomponent;
