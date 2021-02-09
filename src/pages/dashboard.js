import React, { useState, useEffect } from "react";
import { Button, Image, Col, Row, Navbar, Container } from 'react-bootstrap'
import {logout} from '../helpers/auth'
import { imagenUrl } from "../helpers/imagenUrl";
import logo from '../assets/logo.png'
import { token } from "../helpers/auth";

export default function Dashboard(props){
    const [user, setUser] = useState()

    useEffect(() => {
        (async () => {
          const token = localStorage.getItem("token") || "";
          await fetch(`${process.env.REACT_APP_URL}/usuario`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "token": token
            },
          })
            .then((res) => res.json())
            .then(({ user }) => setUser(user));
        })();
    },[])
    
    if(!user) return <b>loading...</b>
        console.log(user);
    
    return (<>
      <NavBar {...user} />
      <Container>
        <Content />
      </Container>
    </>);
}

const NavBar = (user) => {
    const imagen = imagenUrl(user.imagen);
    return (
      <Navbar style={{ backgroundColor: "lightblue" }}>
        <Navbar.Brand>Challenge Test</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <b>{user.nombre}&nbsp;&nbsp;</b>
            <Image
              alt="avatar"
              src={imagen}
              roundedCircle
              style={{ height: "30px" }}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
}

const Content = () => {

    return (
        <div>
            <p>Contet</p>
        </div>
    )
};


/**
 *  <div>
        <Row sm={12}>
          <Col
            sm={1}
            style={{
              height: "100vh",
              backgroundColor: "lightblue",
            }}
          >
            <div>
              <img
                src={logo}
                style={{
                  height: "50px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                alt="logo"
              />
              <hr />
              <Image alt="avatar" src={imagen} roundedCircle  style={{ height: "30px" }} />
              <p>{user.nombre}</p>
              <Button
                size="sm"
                variant="outline-info"
                onClick={() => logout(props)}
              >
                logout
              </Button>
            </div>
          </Col>
          <Col>
            <b style={{ fontSize: "28px", marginLeft: "15px" }}>My Ideas</b>
            <hr />
          </Col>
        </Row>
      </div>
 */