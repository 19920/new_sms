import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal,Card,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const IncomeDashbord = () => {
    return (
        <>
         <h1 className="text-center pt-5">Accounting Dashboard</h1>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card>
                        <Card.Header>Fee Invoices</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/accounting/feetypes`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  Fee Invoices
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Add New Invoice
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Payment History
                  </Button>
              </LinkContainer>
                           

                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>Fee Types</Card.Header>
                        <Card.Body>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  View Fee Types
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Add New Fee Type
                  </Button>
              </LinkContainer>
             
                            

                        </Card.Body>
                    </Card>

                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card>
                        <Card.Header>Expense</Card.Header>
                        <Card.Body>

                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  View Expense
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Add New Expense
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Expense Category
                  </Button>
              </LinkContainer>
                           

                        </Card.Body>
                    </Card>

                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card>
                        <Card.Header>Income</Card.Header>
                        <Card.Body>

                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="primary" className="btn-sm">
                  <i className="fas fa-edit"></i>
                  View Income
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Add New Income
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="light" className="btn-sm ml-2">
                  <i className="fas fa-edit"></i>
                  Income Category
                  </Button>
              </LinkContainer>
                          

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default IncomeDashbord
