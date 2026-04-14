import React, { useCallback, useState } from "react";
import Display from "./Display";

const UserCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [allData, setAllData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
//   returns memoized function
// to prevent/freeze unnecessary function
  const saveData = useCallback((e) => {
    e.preventDefault();
    setAllData([...allData, data]);
  },[data])
  return (
   
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id=""
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        AGe:
        <input
          type="number"
          name="age"
          id=""
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
         <input type="submit" value="Save" />
      </form>
      <Display allData={allData}/>
    </div>
  );
};

export default UserCrud;
