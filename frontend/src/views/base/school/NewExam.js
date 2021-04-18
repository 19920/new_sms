import React,{useState} from 'react'
import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const NewExam = () => {
    const[title,setTitle] = useState("")
const[description,setDescription] = useState("")
const[url,setUrl] = useState("")
const[file,setFile] = useState("")
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
            <hr></hr>
         <Row>
        <Col xs={12} md={4} lg={4}>
      
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
      <Row className="bg-info text-center">

<Col xs={12} md={12} lg={12}>
<h4 className="text-white text-center">Add New Exam</h4>
</Col>

</Row>
<Row className="border">
    <Col sm={12} md={12} lg={12}>
                    <h3>Exam Details</h3>

                </Col>
                <Col sm={12} md={6} lg={6}>
                <Form.Group controlId='title'>
                    <Form.Label>Exam Title:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter Title" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter Title" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select class'}>Select class</option>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                      
                                   </Form.Control>
                    <span>You can assign this exam to single class or multiple classes.You will be able to create admit cards for
                        selected students from those classes
                    </span>
                </Form.Group>

                </Col>
                <Col sm={12} md={6} lg={6}>
                <Form.Group controlId='title'>
                    <Form.Label>Exam Center:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter exam center" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter end Date" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='droup'>
                    <Form.Label>Exam Group:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter exam group" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

               
                </Col>
                {/* <Col sm={12} md={3} lg={3}>
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
                <Col sm={12} md={3} lg={3}>
                <Form.Group controlId='date'>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter date" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col> */}
            </Row>
            <Row className="border">
                <Col sm={12} md={12} lg={12}>
                    <h3>Exam Papers</h3>

                </Col>
                <Col sm={12} md={3} lg={3}>
                <Form.Group controlId='subject'>
                    <Form.Label>Subject Name:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter subject name" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.Label>Paper Date:</Form.Label>
                    <Form.Control style={{height:50}}  type="date" placeholder="Enter paper date" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col sm={12} md={3} lg={3}>
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
                <Form.Group controlId='time'>
                    <Form.Label>Start Time:</Form.Label>
                    <Form.Control style={{height:50}}  type="time" placeholder="Enter start date" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                    </Col>


                    <Col sm={12} md={3} lg={3}>
                    <Form.Group controlId='subject'>
                    <Form.Label>Maximum Marks:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter maximum max" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.Label>End Time:</Form.Label>
                    <Form.Control style={{height:50}}  type="time" placeholder="Enter end date" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                    </Col>


                    <Col sm={12} md={3} lg={3}>
                    <Form.Group controlId='code'>
                    <Form.Label>Paper Code/Subject Code:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam paper code" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Label>Room Number:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                    </Col>
            </Row>
            <Row className="border">
            <Col sm={12} md={12} lg={12}>
                    <h3>Grade Criteria</h3>

                </Col>
            <Col sm={12} md={8} lg={8}>
            <Row>
            <Col sm={12} md={3} lg={3}>
                    <Form.Group controlId='code'>
                    <Form.Label>Perecentage>=</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam paper code" value={0} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={41} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='code'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam paper code" value={51} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={61} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={71} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={81} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={91} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                    </Col>


                    <Col sm={12} md={3} lg={3}>
                    <Form.Group controlId='code'>
                    <Form.Label>{'Perecentage<='}</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam paper code" value={40} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={50} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='code'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam paper code" value={60} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={70} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={80} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={90} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={100} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                    <Form.Group controlId='code'>
                    <Form.Label>{'Assign Grade'}</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam paper code" value={'F'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={'D'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={'C'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={'B'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={'B+'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={'A'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='room'>
                    <Form.Control style={{height:50}}  type="text" placeholder="Exam room number" value={'A+'} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                    <Form.Label>{'Action'}</Form.Label>
                        <Form.Group>
                       
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                        <Form.Group>
                        <LinkContainer to={`/school/study-materials`}>
                            <Button variant="info" className="btn-sm ml-2">
                            <i className="fas fa-edit"></i>
                           X
                            </Button>
                        </LinkContainer>
                        </Form.Group>
                    </Col>
            </Row>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <Col sm={12} md={12} lg={12}>
                    <h3>Overall Grade</h3>
                    <Form.Group controlId='login'>
           
           <Form.Check type="radio" 
           label="Enable"
            value={isBusCharge} 
            checked={isBusCharge}
           onChange={(e)=>{
               setBusInCharge(e.target.checked)
               
           }
           }>
  
           </Form.Check>
           
           <Form.Check type="radio" 
           label="Disable"
            value={isBusCharge} 
            checked={isBusCharge}
           onChange={(e)=>{
               setBusInCharge(e.target.checked)
               
           }
           }>
  
           </Form.Check>
       </Form.Group>
                </Col>
         
           
            </Col>
            </Row>
           
            <Row className="mt-3">
        <Col xs={12} md={4} lg={4}></Col>
        <Col xs={12} md={4} lg={4}>
        <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" />Save New Exam</CButton>  
        <LinkContainer to={`/school/study-materials`}>
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

export default NewExam
