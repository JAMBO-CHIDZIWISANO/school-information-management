import {ArrowBackSharp, PersonAddAlt1Sharp, ViewList } from '@mui/icons-material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button} from "react-bootstrap";

import Form1ResultsRecords from "./Form1ResultsRecords"
import Form2ResultsRecords from './Form2ResultsRecords';
import Form3ResultsRecords from "./Form3ResultsRecords"
import Form4ResultsRecords from "./Form4ResultsRecords"
const ExamsRecords = () => {

  return (
    <div className='container'>
        <div>
        <hr />
        <div style={{textAlign: "left"}}>
        <Link to="/admin/students-details">
          <Button variant="primary">
            <ArrowBackSharp/>
          </Button>
        </Link>
        </div>
      <div style={{textAlign: "right"}}>
      
        <Link to={"/admin/exam-records"}> 
            <Button variant="primary">
            <ViewList/>Examinations
          </Button>        
        </Link>
    
        <Link to="/admin/add-student">
          <Button variant="primary">
            <PersonAddAlt1Sharp/>
          </Button>
        </Link>
      </div>
      <hr/>
      </div>
      <Container >
         
            <Row >
               
                    <Form1ResultsRecords/>
                
            </Row>
            <hr/>
            
            <Row>
                
                <Form2ResultsRecords/>
            
            </Row>
            <hr/>
            <Row>
                <Form3ResultsRecords/>
            
            </Row>
            <hr/>
            <Row>
                <Form4ResultsRecords/>
            
            </Row>
        </Container>
    </div>
  )
}

export default ExamsRecords
