import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div>
      <div id='navbar' className='bg-gray-300'>
        <ul className='flex gap-24 px-10'>
          <li>Home</li>
          <li><Button variant="text"><Link to='/create-employee'> Create Employee</Link></Button> </li>
          <li><Button variant="text"><Link to="/employee-list">  Employee list </Link></Button> </li>
          <li className='border border-success p-2 mb-2 bg-red-300'> welcome : {name}</li>
          <li>Logout</li>
        </ul>
      </div>
      <h1 className='bg-red-200 p-5 text-xxl'>Your DashBord</h1>
      <p className="text-center p-10">You're on The Admin Panel !</p>
    </div>
  )
}

export default DashBord