import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal,Card,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const ExaminationDashboard = () => {
    return (
        <>
         <h1 className="text-center pt-5">Examination Dashboard</h1>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card>
                        <Card.Header>Manage Exams</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/accounting/feetypes`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  View Exams
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/students/new-exam`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Add New Exam
                  </Button>
              </LinkContainer>
             
                           

                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>Exam Admit Cards</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                 Manage Admit Cards
                  </Button>
              </LinkContainer>
             
             
                            

                        </Card.Body>
                    </Card>

                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card>
                        <Card.Header>Exam Results</Card.Header>
                        <Card.Body>

                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Manage Exam Results
                  </Button>
              </LinkContainer>
              
              
                           

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Results Assessment</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm mr-2">
                  <i className="fas fa-edit"></i>
                 Results Assessment
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Exam Results Assessment
                  </Button>
              </LinkContainer>
             
             
                            

                        </Card.Body>
                    </Card>

                </Col>
       
            </Row>
        </>
    )
}

export default ExaminationDashboard
