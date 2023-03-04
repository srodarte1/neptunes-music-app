import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password} Confirm Password: ${confirmPassword}`);
  };

  return (
    <Container className="wrapper">
      <div className="logo">
        <img src="https://iili.io/HWd9RHB.png" alt="Logo" />
      </div>
      <h3 className="app-name">Neptunes</h3>
      <h2 className="name">Sign Up</h2>

      <Form onSubmit={handleSubmit} className="form-field">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Form.Group>

        <br></br>
        <Button className="btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center mt-3">
        <a href="#">Already have an account?</a>
      </div>
    </Container>
  );
}

export default SignupForm;
