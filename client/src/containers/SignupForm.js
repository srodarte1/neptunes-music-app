import { useState, useContext } from "react";
import { UserContext } from '../context/UserContext'
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function SignupForm() {
  const font = { fontFamily: "Spotify-Bold" }
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
    <Container className="wrapper login-container" style={{...font, maxWidth: '600px'}}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div className="logo">
            <img src="https://iili.io/HWaXBwB.png" alt="Logo" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h3 className="app-name" style={font}>
            Neptunes
          </h3>
          <h2 className="name" style={font}>
            Sign Up
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => handleSignup(e, newUser)} className="form-field">
            <Form.Group controlId="formBasicName">
              <Form.Label style={font}>Name</Form.Label>
              <Form.Control
                name='name'
                type="text"
                placeholder="Enter name"
                value={newUser.name}
                onChange={handleChange}
                style={font}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={font}>Email address</Form.Label>
              <Form.Control
                name='email'
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={handleChange}
                style={font}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={font}>Password</Form.Label>
              <Form.Control
                name='password'
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleChange}
                style={font}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label style={font}>Confirm Password</Form.Label>
              <Form.Control
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                value={newUser.password_confirmation}
                onChange={handleChange}
                style={font}
              />
            </Form.Group>

            <br></br>
            <Button
              className="btn"
              variant="dark"
              type="submit"
              style={{ backgroundColor: "black", color: "white", ...font }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center mt-3">
          <div style={font}>
            <a href="/">Already have an account?</a>
            <br></br>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupForm;
