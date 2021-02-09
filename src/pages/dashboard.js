import React, { useState, useEffect } from "react";
import { Button, Image, Navbar, Container } from 'react-bootstrap'
import {logout} from '../helpers/auth'
import { imagenUrl } from "../helpers/imagenUrl";

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
    
    return (
      <>
        <NavBar {...user} {...props.history} />
        <Container>
          <Content />
        </Container>
      </>
    );
}

const NavBar = (props) => {
    const imagen = imagenUrl(props.imagen);
   
    return (
      <Navbar style={{ backgroundColor: "lightblue" }}>
        <Navbar.Brand>Challenge Test</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <b>{props.nombre}&nbsp;&nbsp;</b>
            <Image
              alt="avatar"
              src={imagen}
              roundedCircle
              style={{ height: "30px" }}
            />
          </Navbar.Text>
          <Button size="small" variant="link" onClick={() => logout(props)}>Log Out</Button>
        </Navbar.Collapse>
      </Navbar>
    );
}

const Content = (props) => {

    return (
      <div>
        <p>Contet</p>
       
      </div>
    );
};