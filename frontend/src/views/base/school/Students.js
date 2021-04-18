import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
  {id:1,name:"John Kadahizi",phone:'0730923388',email:"jkadahizi@gmail.com",admissionNumber:"10002",class:"4th",section:"MP",rollNumber:1,fatherName:"John",motherName:"Daniella",status:'Active'},
  {id:2,name:"Daniella Kadahizi",phone:'0730923388',email:"jkadahizi@gmail.com",admissionNumber:"10003",class:"3rd",section:"BC",rollNumber:12,fatherName:"John",motherName:"Daniella",status:'Active'},
  {id:3,name:"Michaellla Kadahizi",phone:'0730923388',email:"jkadahizi@gmail.com",admissionNumber:"10005",class:"1st",section:"",rollNumber:13,fatherName:"John",motherName:"Daniella",status:'Active'},

  
]
const Students = () => {
    return (
        <>
            <CRow>
            <CCol xs="12" md="12" lg="12">
            <LinkContainer to={`/student/admission`}>
            <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" /> Add new</CButton>  
            </LinkContainer>
            <LinkContainer to={`/student/admission`}>
            <CButton className="ml-2" type="button" size="sm" color="primary"><CIcon name="cil-scrubber" /> Export list</CButton>  
            </LinkContainer>
            </CCol>
            </CRow> 
            <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All Students</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search student by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>ADMISSION NUMBER</th>
                <th>CLASS</th>
                <th>SECTION</th>
                <th>ROLL NUMBER</th>
                <th>FATHER NAME</th>
                <th>MOTHER NAME</th>
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
                    <td>{product.admissionNumber}</td>
                    <td>{product.class}</td>
                    <td>{product.section}</td>
                    <td>{product.rollNumber}</td>
                    <td>{product.fatherName}</td>
                    <td>{product.motherName}</td>
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

export default Students
