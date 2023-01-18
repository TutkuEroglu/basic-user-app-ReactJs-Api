import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleUser from "./SingleUser"


const UserList = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        const response = await axios.get("https://randomuser.me/api/?result=5");
        setUsers(response.data.results)
    }   

    useEffect(() => {
        fetchUsers();
    }, [])
    
  return (
    <>
       {users?.map((val, id) => (
            <div key={id}><SingleUser user={val}/></div>
        ))}
    </>
  )
}

export default UserList