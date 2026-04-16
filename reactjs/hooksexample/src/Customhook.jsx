import React, { useEffect, useState } from 'react'
import useApi from './useApi'

const Customhook = () => {
    const [user]= useApi("https://jsonplaceholder.typicode.com/users")
    const [post]= useApi("https://jsonplaceholder.typicode.com/posts")
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res)=>res.json())
    //         .then((result)=>setPost(result))
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res)=>res.json())
    //         .then((result)=>setUser(result))
    // })
  return (
    <div>
      <h3>Custom Hooks Example</h3>
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {
                user.map((i,index)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Customhook
