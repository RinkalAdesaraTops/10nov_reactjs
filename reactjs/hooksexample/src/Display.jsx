import React, { memo } from 'react'

const Display = ({allData}) => {
    console.log('display component called...');
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {allData.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Display)
