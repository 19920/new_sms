import React,{useState} from 'react'
import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const NewStudyMaterial = () => {
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
<h4 className="text-white text-center">Add New Study Material</h4>
</Col>

</Row>
            <Row className="border">
                <Col sm={12} md={12} lg={12}>
                <Form.Group controlId='title'>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter Title" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col sm={12} md={12} lg={12}>
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control  as ="textarea" rows={8} type="text" placeholder="Enter Description" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col sm={12} md={12} lg={12}>
                <Form.Group controlId='url'>
                    <Form.Label>URL:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter url" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col>
            </Row>
            <Row className="border">
            <Col sm={12} md={6} lg={6}>
            <Form.Group controlId='url'>
                    <Form.Label>Study Materials:</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose Files" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select class'}>Select class</option>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                    
                                   </Form.Control>
                </Form.Group>
            </Col>

            </Row>
            <Row className="mt-3">
        <Col xs={12} md={4} lg={4}></Col>
        <Col xs={12} md={4} lg={4}>
        <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" />Save New Material</CButton>  
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

export default NewStudyMaterial
