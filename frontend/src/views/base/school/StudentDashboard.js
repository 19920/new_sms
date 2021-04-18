import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal,Card,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const StudentDashbord = () => {
    return (
        <>
         <h1 className="text-center pt-5">Student Dashboard</h1>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card>
                        <Card.Header>Admission</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/accounting/feetypes`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Add New Admission
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/students/bulkadmission`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Bulk Admission
                  </Button>
              </LinkContainer>
             
                           

                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>Student Promotion</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Promote  Students
                  </Button>
              </LinkContainer>
             
             
                            

                        </Card.Body>
                    </Card>

                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card>
                        <Card.Header>Students</Card.Header>
                        <Card.Body>

                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  View Students
                  </Button>
              </LinkContainer>
              
              
                           

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Transfer Student</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm mr-2">
                  <i className="fas fa-edit"></i>
                  View Students Transfered
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Transfer Student
                  </Button>
              </LinkContainer>
             
             
                            

                        </Card.Body>
                    </Card>

                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card>
                        <Card.Header>ID Cards</Card.Header>
                        <Card.Body>

                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Print ID Cards
                  </Button>
              </LinkContainer>
             
             
                          

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Certificates</Card.Header>
                        <Card.Body>

                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm mr-2">
                  <i className="fas fa-edit"></i>
                 View Certificates
                  </Button>
              </LinkContainer>
             
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                 Add New Certificate
                  </Button>
              </LinkContainer>
                          

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default StudentDashbord
