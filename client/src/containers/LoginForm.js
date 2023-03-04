import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {UserContext} from '../context/UserContext';
// import Link from "@mui/material/Link";

function LoginForm() {

    const {handleLogin} = useContext(UserContext)

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setLoginFormData(currentUser => ({
            ...currentUser,
            [name]: value
        }))
        console.log(loginFormData)
    }
 
  return (
    <Container className="wrapper">
      <div className="logo">
        <img src="https://iili.io/HWd9RHB.png" alt="Logo" />
      </div>
      <h3 className="app-name">Neptunes</h3>
      <h2 className="name">Login</h2>


      <Form onSubmit={(e) => handleLogin(e, loginFormData)} className="form-field">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={loginFormData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={loginFormData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Button className="btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center mt-3">
        <a href="#">{"Don't have an account?"} Sign Up </a>
        <br></br>
      </div>
    </Container>
  );
}

export default LoginForm;
