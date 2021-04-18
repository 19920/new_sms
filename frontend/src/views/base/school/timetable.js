import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
  {id:1,class:"3rd",section:'MP'},
  {id:2,class:"4th",section:'BC'},
  {id:3,class:"1st",section:'ECO'},

  
]
const TimeTable = () => {
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
        
        <Row>
        <Col xs={12} md={4} lg={4}>
        <CButton onClick={()=>setShoForm(!showForm)} type="button" size="sm" color="success"><CIcon name="cil-scrubber" /> Add New Routine</CButton>   
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='section'>
                    <Form.Label style={{fontWeight:'bold'}}>Current Session:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'2021'}>2021-2022</option>
                     <option  value={'2022'}>2022-2023</option>
                     <option  value={'2023'}>2023-2024</option>
                     
                    
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
           
            </Col>
        </Row>
      <hr></hr>
  {showForm&&      <Row>
            <Col sm={12} md={4} lg={4}>
           
                <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select class'}>Select class</option>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                    
                                   </Form.Control>
                </Form.Group>
                <Form.Group controlId='starttime'>
                    <Form.Label>Start Time:</Form.Label>
                    <Form.Control style={{height:50}}  type="time" placeholder="Enter start time" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='name'>
                    <Form.Label>Room Number:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter room number" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <Form.Group controlId='section'>
                    <Form.Label style={{fontWeight:'bold'}}>Section:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Section'}>Select Section</option>
                     <option  value={'MP'}>MP</option>
                     <option  value={'BC'}>BC</option>
                     <option  value={'ECO'}>ECO</option>
                     
                    
                    </Form.Control>
                </Form.Group>
           
            <Form.Group controlId='code'>
                    <Form.Label>End Time</Form.Label>
                    <Form.Control style={{height:50}}  type="time" placeholder="Enter end time" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='teacher'>
                    <Form.Label style={{fontWeight:'bold'}}>Teacher:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Teacher'}>Select Teacher</option>
                     <option  value={'John'}>John</option>
                     <option  value={'Daniella'}>Daniella</option>
                     <option  value={'Michaella'}>Michaella</option>
                     
                    
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col sm={12} md={4} lg={4}>

<Form.Group controlId='type'>
        <Form.Label style={{fontWeight:'bold'}}>Select Subject : </Form.Label>
         <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
         <option  value={'Select Subject '}>Select Subject </option>
         <option  value={'Mathematics'}>Mathematics</option>
         <option  value={'Physics'}>Physics</option>
         <option  value={'English'}>English</option>
         <option  value={'Science'}>Science</option>
        
                       </Form.Control>
    </Form.Group>
    <Form.Group controlId='day'>
                    <Form.Label style={{fontWeight:'bold'}}>Day: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Monday'}>Monday</option>
                     <option  value={'Tuesday'}>Tuesday</option>
                     <option  value={'Wednesday'}>Wednesday</option>
                     <option  value={'Thursday'}>Thursday</option>
                     <option  value={'Friday'}>Friday</option>
                    
                                   </Form.Control>
                </Form.Group>
   
</Col>
        </Row>}
        <CRow>
        <CCol xs="12" lg="8">
    <h1 className="text-center pt-5">Class TimeTable</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search subject by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>ID</th>
                <th>CLASS</th>
                <th>SECTION</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {usersData&&usersData.map(product=>(
        <tr key={product.id}>
                      <td>{product.id}</td>
                    <td>{product.class}</td>
                    <td>{product.section}</td>
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

export default TimeTable

