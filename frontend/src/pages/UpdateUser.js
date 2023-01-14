import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function UpdateUser({id}) {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const updateHandler = (id) => {
    Axios.post(`http://localhost:5000/users/update/${id}`,{username: username,password: password})
     .then(() => alert("user updated"))
     .catch(err => console.log(err))
    setUsername("");
    setPassword("");
    navigate('/')
    
}
  return (
    <Container>
    <Form onSubmit={(e) => {e.preventDefault(); updateHandler(id)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} value={username}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default UpdateUser