import { useState, useContext } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

function LoginForm() {
  const { handleLogin } = useContext(UserContext);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginFormData((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const font = { fontFamily: "Spotify-Bold" }; // define font style object

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
            Login
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => handleLogin(e, loginFormData)} className="form-field">
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={font}>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={loginFormData.email}
                onChange={handleChange}
                style={font}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={font}>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={loginFormData.password}
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
            <a href="/signup">{"Don't have an account?"} Sign Up </a>
            <br></br>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
