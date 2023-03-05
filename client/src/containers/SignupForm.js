import { useState, useContext } from "react";
import { UserContext } from '../context/UserContext'
import { Container, Form, Button } from "react-bootstrap";


function SignupForm() {
  const {handleSignup} = useContext(UserContext)
 const [newUser, setNewUser] = useState({
  name: '',
  email: '',
  password: '',
  password_confirmation:'',
  registrationErrors: ''
 })

 const handleChange = ({target: {name, value}}) => {
  setNewUser({...newUser, [name]: value})
 }
  

  return (
    <Container className="wrapper">
      <div className="logo">
        <img src="https://iili.io/HWd9RHB.png" alt="Logo" />
      </div>
      <h3 className="app-name">Neptunes</h3>
      <h2 className="name">Sign Up</h2>

      <Form onSubmit={(e) => handleSignup(e, newUser)} className="form-field">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name='name'
            placeholder="Enter name"
            value={newUser.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          required
            type="email"
            placeholder="Enter email"
            name='email'
            value={newUser.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          required
            type="password"
            placeholder="Password"
            name='password'
            value={newUser.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          required
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={newUser.password_confirmation}
            onChange={handleChange}
          />
        </Form.Group>

        <br></br>
        <Button className="btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center mt-3">
        <a href="/">Already have an account?</a>
      </div>
    </Container>
  );
}

export default SignupForm;
