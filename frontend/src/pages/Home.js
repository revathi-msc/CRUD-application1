import React, { useInsertionEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';


function Home({getId}) {
  const navigate = useNavigate();
  const [users,setUsers] = useState([]);
  useInsertionEffect(() => {
    Axios.get('http://localhost:5000/users')
     .then(res => setUsers(res.data))
})

//delete
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:5000/users/${id}`)
    .then(() => alert("user deleted"))
    .catch((e) => console.log(e))
  }

//update
   const updateUser = (id) => {
    getId(id)
    navigate('/updateForm');
   }


return (
    <Container>
    <h1 className='display-5 text-center'>Users Lists</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>UserName</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index) =>{
            return (
                <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.username}</td>
          <td>{user.password}</td>
          <td><button className='btn btn-primary' onClick={() => updateUser(user._id)}>Update</button></td>
          <td><button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button></td>
        </tr>
        )
        })}
        </tbody>
    </Table>
    </Container>
  )
}

export default Home