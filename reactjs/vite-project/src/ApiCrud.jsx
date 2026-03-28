import React, { useState } from "react";

const ApiCrud = () => {
  const [userinfo, setUserinfo] = useState({
    name: "",
    age: "",
  });
  const [alldata, setAllData] = useState([]);

  return (
    <>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" name="name" />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" />
        <br />
        <br />
        <button>Submit</button>
        <br />
      </form>

      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {alldata.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ApiCrud;
