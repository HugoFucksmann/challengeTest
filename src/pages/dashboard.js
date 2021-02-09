import React, { } from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import {logout} from '../helpers/auth'
import logo from '../assets/logo.png'

export default function Dashboard(props){


    return (
      <div>
        <Row sm={12}>
          <Col
            sm={1}
            style={{
              height: "100vh",
              backgroundColor: "lightblue",
            }}
          >
            <div >
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
              <img alt="avatar" src={logo} style={{ height: "30px" }} />
              <p>colo</p>
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
            <b style={{fontSize: '28px', marginLeft: '15px'}}>My Ideas</b>
            <hr />
          </Col>
        </Row>
      </div>
    );
}