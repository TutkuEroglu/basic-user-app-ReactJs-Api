import React from 'react'
import "./style.css"

const SingleUser = ({user}) => {
    console.log(user)
  return (
    <div className='single-user'>
        <div className='card'>
            <img src={user.picture.large} alt="" className='user-pic'/>
            <div className='user-infoArea'>
                <h3>{user.name.first} {user.name.last}</h3>
                <p>Email: {user.email}</p>
                <p>Location: {user.location.city} | {user.location.country}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleUser