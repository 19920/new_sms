import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
  {id:1,name:"Math",code:'math0001',type:'math',classes:['3rd','1st'],teachers:['John',"Raphaella"]},
  {id:2,name:"Physics",code:'phyh0001',type:'phy',classes:['2nd','4th'],teachers:['Kadahizi',"Michaella"]},
  {id:3,name:"Economie",code:'ecoh0001',type:'science',classes:['3rd','4th'],teachers:[]},

  
]
const AllSubject = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const[showForm,setShoForm] = useState(false)
    const [isBusCharge,setBusInCharge] = useState('')
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState('')
    const [isparentnewuser,setParentnewuser] = useState('')
    return (
        <>
        <CRow>
            <CCol xs="12" md="12" lg="12">
            <CButton onClick={()=>setShoForm(!showForm)} type="button" size="sm" color="success"><CIcon name="cil-scrubber" /> Add New Subject</CButton>  
            </CCol>
        </CRow>
  {showForm&&      <Row>
            <Col sm={12} md={6} lg={6}>
            <Form.Group controlId='name'>
                    <Form.Label>Subject Name:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter phone" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='type'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Subject Type: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Subject Type'}>Select Subject Type</option>
                     <option  value={'Theory'}>Theory</option>
                     <option  value={'Practical'}>Practical</option>
                     <option  value={'Subjective'}>Subjective</option>
                     <option  value={'Objective'}>Objective</option>
                    
                                   </Form.Control>
                </Form.Group>

            </Col>
            <Col sm={12} md={6} lg={6}>
            <Form.Group controlId='code'>
                    <Form.Label>Subject Code</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter phone" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select class'}>Select class</option>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                    
                                   </Form.Control>
                </Form.Group>
            </Col>
        </Row>}
        <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All Subjects</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search subject by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>ID</th>
                <th>SUBJECT NAME</th>
                <th>SUBJECT CODE</th>
                <th>SUBJECT TYPE</th>
                <th>CLASSES</th>
                <th>TEACHERS</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {usersData&&usersData.map(product=>(
        <tr key={product.id}>
                      <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.type}</td>
                    <td>{product.classes.map((c,index)=>(<p key={index}>{c}</p>))}</td>
                    <td>
                        {product.teachers.length>0?product.teachers.map((t,index)=>(<p key={index}>{t}</p>)):
                        <LinkContainer to={`/school/teachers-timetable`}>
                        <a className="btn-sm text-info text-right">Assign Teachers</a>
                     </LinkContainer>}
                    </td>
                    <td>
                    <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="success" className="btn-sm">
                            <i className="fas fa-edit"></i>
                            View
                            </Button>
                        </LinkContainer>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="warning" className="btn-sm m-1">
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

export default AllSubject

