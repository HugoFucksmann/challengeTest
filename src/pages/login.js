import React, { useState } from "react";
import "./login.css";
import {login} from "../helpers/auth";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await login(email, password, props);
  }

  return (
    <div style={{ width: "25%", margin: "150px auto" }}>
      <Card className="login shadow border-info">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col md={4}>
                <Button
                  size="sm"
                  variant="outline-info"
                  type="submit"
                  disabled={!validateForm()}
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <Button
                  size="sm"
                  variant="outline-info"
                  type="submit"
                  onClick={() => props.history.push("/registrarse")}
                >
                  registrarse
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
