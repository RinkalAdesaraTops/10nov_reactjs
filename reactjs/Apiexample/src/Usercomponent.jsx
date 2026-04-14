import axios from "axios";
import React, { useEffect, useState } from "react";

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
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      axios
        .put("http://localhost:3000/users/" + id, data)
        .then(() => {
          console.log("Updated")
          disp()
    });
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => {
          console.log("Inserted") 
          disp()
        });
    }
    setData({
        name:'',
        age:""
    })
    setId('')
    // disp()
  };
  useEffect(() => {
    disp()
  }, []);
  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data));
  };
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => {
        console.log("Deleted")
        disp()
      });
  };
  const editData = (id) => {
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
    setId(id);
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
          {alldata.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
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
