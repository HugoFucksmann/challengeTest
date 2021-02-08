import React, { } from 'react'
import { Button, Container } from 'react-bootstrap'
import {logout} from '../helpers/auth'


export default function Dashboard(props){


    return (
         <Container fluid="lg">
             <Button onClick={() => logout(props)}>
                 logout
             </Button>
         </Container>
    )
}