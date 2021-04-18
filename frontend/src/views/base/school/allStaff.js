import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
  {id:1,name:"John Kadahizi",phone:'0730923388',email:"jkadahizi@gmail.com",joinDate:"2021-04-15",salary:100000,designation:'Class Teacher',role:'Teacher',loginEmail:'jkadahizi@gmail.com',username:'john',status:'Active'},
  {id:2,name:"Daniella Kadahizi",phone:'0730923388',email:"jkadahizi@gmail.com",joinDate:"2021-04-15",salary:100000,designation:'Class Teacher',role:'Teacher',loginEmail:'jkadahizi@gmail.com',username:'john',status:'Active'},
  {id:3,name:"Michaellla Kadahizi",phone:'0730923388',email:"jkadahizi@gmail.com",joinDate:"2021-04-15",salary:100000,designation:'Class Teacher',role:'Teacher',loginEmail:'jkadahizi@gmail.com',username:'john',status:'Active'},

  
]
const AllStaff = () => {
    return (
        <>
        <CRow>
            <CCol xs="12" md="12" lg="12">
            <LinkContainer to={`/schools/staff`}>
            <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" /> Add new</CButton>  
            </LinkContainer>
            </CCol>
        </CRow>
        <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All Staff</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search staff by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>JOINING DATE</th>
                <th>SALARY</th>
                <th>DESGNATION</th>
                <th>ROLE</th>
                <th>LOGIN EMAIL</th>
                <th>LOGIN USERNAME</th>
                <th>STATUS</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {usersData&&usersData.map(product=>(
        <tr key={product.id}>
                      <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.phone}</td>
                    <td>{product.email}</td>
                    <td>{product.joinDate}</td>
                    <td>{product.salary}</td>
                    <td>{product.designation}</td>
                    <td>{product.role}</td>
                    <td>{product.loginEmail}</td>
                    <td>{product.username}</td>
                    <td>{product.status}</td>
                    <td>
                    <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="success" className="btn-sm">
                            <i className="fas fa-edit"></i>
                            View
                            </Button>
                        </LinkContainer>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="warning" className="btn-sm">
                            <i className="fas fa-edit"></i>
                            Edit
                            </Button>
                        </LinkContainer>
                        <Button variant="danger" className="btn-sm">
                            <i className="fas fa-trash"></i>
                            Delete
                            </Button>
  
                    </td>
  
                </tr>))
  }
        </tbody>
  
    </Table>
  </CCol>
        </CRow>
            
        </>
    )
}

export default AllStaff
