
import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
    {id:1,enrollemntNumber:"0001",name:'John Kadahizi',class:"3rd",section:'MP',roolNumber:'1',reasson:"Feeling seek",from:"2021-04-19",to:"2021-04-20"},
   
  
  
    
  ]
const SingleStudentLeave = () => {
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
    return (
        <>
        <Row className="bg-info text-center">

            <Col xs={12} md={12} lg={12}>
            <h4 className="text-white text-center">Edit Student Leave: Student1(Enrollment Number -00001</h4>
            </Col>
           
        </Row>
        <hr></hr>
            <Row className="border">
        <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='leave'>
            <h3>Number  of Leave days</h3>
         <Form.Check type="radio" 
         label="Single Day"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="radio" 
         label="Multiple Days"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         
     </Form.Group>

                
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='startdate'>
                    <Form.Label>StartDate:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter start time" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                
            </Col>
            
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='enddate'>
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter start time" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                
            </Col>
            
        </Row>  
        <Row className="border">
            <Col sm={12} md={8} lg={8}>
            <Form.Group controlId='reason'>
                    <Form.Label>Reason</Form.Label>
                    <Form.Control  as ="textarea" rows={8} type="text" placeholder="Enter Reason" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId='leave'>
            <h3>Status:</h3>
         <Form.Check type="radio" 
         label="Approved"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="radio" 
         label="Unpproved"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         
     </Form.Group>
            </Col>
        </Row>
        <Row>
        <Col xs={12} md={4} lg={4}></Col>
        <Col xs={12} md={4} lg={4}>
        <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" />Update Student Leave</CButton>  
        <LinkContainer to={`/school/stuent-leaves`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                            View All
                            </Button>
                        </LinkContainer>
        </Col>
        <Col xs={12} md={4} lg={4}></Col>
        </Row>
        </>
    )
}

export default SingleStudentLeave
