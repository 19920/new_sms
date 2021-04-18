import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
    {id:1,notice:"MAths",link:"3rd",addedBy:'Kadahizi',date:"2021-04-20",class:"4th",active:true},
    {id:2,notice:"Physics",link:"3rd",addedBy:'John',date:"2021-04-20",class:"3rd",active:true},
    
  
  
    
  ]
const NoticeBoard = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isViewAttendance,setViewAttendance] =useState(true)
    const [isTakeAttendance,setNewAttendance] = useState(false)
    const [gender,setGender] = useState('')
    const[showForm,setShoForm] = useState(false)
    const [isBusCharge,setBusInCharge] = useState('')
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState('')
    const [isparentnewuser,setParentnewuser] = useState('')
    const takeAttendance=()=>{
        setNewAttendance(true)
        setViewAttendance(false)
    }
    const viewAttendance=()=>{
        setNewAttendance(false)
        setViewAttendance(true)
    }
    return (
       <>
         <Row>
        <Col xs={12} md={4} lg={4}>
       
        <LinkContainer to={`/school/new-class-notice`}>
                            <Button variant="success" className="btn-sm text-white">
                            <i className="fas fa-edit"></i>
                            Add new Notice
                            </Button>
                            </LinkContainer>
       
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
      {/* <Row className="border ">
      <Col xs={12} md={4} lg={4}>
      <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select class'}>Select class</option>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                    
                                   </Form.Control>
                </Form.Group>
           </Col>
           <Col xs={12} md={4} lg={4}>
           <Form.Group controlId='section'>
                    <Form.Label style={{fontWeight:'bold'}}>Section:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Section'}>Select Section</option>
                     <option  value={'MP'}>MP</option>
                     <option  value={'BC'}>BC</option>
                     <option  value={'ECO'}>ECO</option>
                     
                    
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='starttime'>
                    <Form.Label>Month:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter start time" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <CButton className="m-2" onClick={()=>setShoForm(!showForm)} type="button" size="sm" color="info"><CIcon name="cil-scrubber" />{isViewAttendance?"View Attendance":"Manage Attendance"}</CButton>   
      </Row> */}

      <CRow>
        <CCol xs="12" lg="12" md="12">
    <h1 className="text-center pt-5">Class Notice Board</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search student by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>Notice</th>
                <th>Class</th>
                <th>Link To</th>
                <th>Date</th>
                <th>Added By</th>
               
                <th></th>
            </tr>
        </thead>
        <tbody>
        {usersData&&usersData.map(product=>(
        <tr key={product.id}>
                    <td>{product.notice}</td>
                    <td>{product.class}</td>
                    <td>{product.link}</td>
                    <td>{product.date}</td>
                    <td>{product.addedBy}</td>
                   
                    <td><LinkContainer to={`/school/student-leaves/id`}>
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

export default NoticeBoard
