
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {LinkContainer} from 'react-router-bootstrap'
const usersData=[
    {id:1,name:"John Kadahizi",userName:"JB",email:"jkadahizi@gmail.com",assigendBy:"Kadahizi"},
    {id:2,name:"Daniella Kadahizi",userName:"JB",email:"jkadahizi@gmail.com",assigendBy:"Kadahizi"},
    {id:3,name:"Michaellla Kadahizi",userName:"JB",email:"jkadahizi@gmail.com",assigendBy:"Kadahizi"},
  
    
  ]
const AssignTeacherToSubject = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [isExistingUser,setexistingUser] = useState(false)
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState(true)
    const [isparentnewuser,setParentnewuser] = useState('')
    return (
        <>  
        <Row>
            <Col xs={12} md={4} lg={4}>
            <LinkContainer to={`/school/all-subjects`}>
            <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" />Back </CButton>  
            </LinkContainer>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <h1 className="text-center">Assign Teacher to subject</h1>
            </Col>
            <Col xs={12} md={4} lg={4}>
           
            </Col>
        </Row>
          
        <hr></hr>

        <Row>
        <Col xs={12} md={6} lg={6}>
           

          
                   <Form.Group controlId='lastName'>
                       <Form.Label><span className="text-danger">*</span>Teacher</Form.Label>
                       <Form.Control  
                        style={{height:50}} type="text" placeholder="Search teacher name" value={email} onChange={(e)=>setEmail(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
                   <CButton  type="button" size="sm" color="info"><CIcon name="cil-scrubber" />Assign Teacher </CButton> 
               </Col>
              
        </Row>
        <hr></hr>
        <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All Teachers for this subject </h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search teacher by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>ASSIGNED BY</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {usersData&&usersData.map(product=>(
        <tr key={product.id}>
                      <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.userName}</td>
                    <td>{product.email}</td>
                    <td>{product.assigendBy}</td>
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

export default AssignTeacherToSubject
