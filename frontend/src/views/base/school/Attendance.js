import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[
    {id:1,enrollemntNumber:"0001",name:'John Kadahizi',section:'MP',roolNumber:'1'},
    {id:1,enrollemntNumber:"0002",name:'Daniella Kadahizi',section:'MP',roolNumber:'2'},
  
  
    
  ]
const Attendance = () => {
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
        <CButton onClick={()=>isTakeAttendance?viewAttendance():takeAttendance()} type="button" size="sm" color="success"><CIcon name="cil-scrubber" />{isTakeAttendance?"View Attendance":"Take Attendance"}</CButton>   
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
      <Row className="border ">
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
      </Row>

      <CRow>
        <CCol xs="12" lg="12" md="12">
    <h1 className="text-center pt-5">Class TimeTable</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search subject by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>Enrollment Number</th>
                <th>Student Name</th>
                <th>Section</th>
                <th>Roll Number</th>
                <th>Status  <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="success" className="btn-sm text-white">
                            <i className="fas fa-edit"></i>
                            Mark all Present
                            </Button>
                        </LinkContainer>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="danger" className="btn-sm m-1 text-white">
                            <i className="fas fa-edit"></i>
                            Mark all Absent
                            </Button>
                        </LinkContainer></th>
            </tr>
        </thead>
        <tbody>
        {usersData&&usersData.map(product=>(
        <tr key={product.id}>
                      <td>{product.enrollemntNumber}</td>
                    <td>{product.name}</td>
                    <td>{product.section}</td>
                    <td>{product.roolNumber}</td>
                    <td>

                    <Form.Group controlId='gender'>
         
         <Form.Check type="radio" 
         label="Undefined"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="radio" 
         label="Present"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="radio" 
         label="Absent"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group>
     
  
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

export default Attendance
