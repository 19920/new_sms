import React,{useState,useEffect} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import{useDispatch,useSelector} from 'react-redux'
import { addStaffToSchool } from './redux/actions/schoolStaffActions';
const NewStaff = ({history}) => {
    const dispatch = useDispatch()
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const [description,setDescription] = useState('')
    const [address,setAddress] = useState('')
    const [dateOfBirth,setDateOfBirth] = useState('')
    const [nationalId,setNationalId] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [isBusCharge,setBusInCharge] = useState('')
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState('')

    const assignedStaffInfo=useSelector((state)=>state.assignedStaffInfo)
    const {loading:assigningLoading,success,} = assignedStaffInfo
    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser
    const onsubmit=(e)=>{
        // dispatch(addStaffToSchool({
        //   name:name,
        //   description:description
        // }))
      }
      useEffect(() => {
        if(!userInfo){
          history.push('/login')
         }
        
      }, [dispatch,userInfo,success])
  
    return (
        <>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <h3>Personal Details:</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='email'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="email" placeholder="Enter first name" value={firstname} onChange={(e)=>setFirstName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control  as ="textarea" rows={8} type="text" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={3}>
            <Form.Group controlId='email'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter last name" value={lastname} onChange={(e)=>setLastName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='gender' style={{height:80}}>
            <Form.Label>Gender</Form.Label>
         <Form.Check type="checkbox" 
         label="Male"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Female"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group>
     
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='phone'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='date'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control style={{height:50}} type="date" placeholder="Enter date of birth" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>National ID or Passport No.</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="National ID or Passport No." value={nationalId} onChange={(e)=>setNationalId(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>

<hr></hr>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <h3>Joining Details:</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='date'>
                    <Form.Label>Joining Date</Form.Label>
                    <Form.Control  style={{height:50}} type="date" placeholder="Enter date of birth" value={password} onChange={(e)=>setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>
          

                <Form.Group controlId='salary'>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="0" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={3}>
            <Form.Group controlId='role'>
                    <Form.Label>Role</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Role" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
     <Form.Group controlId='designation'>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Enter designation" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as ="textarea" rows={8}   type="text" placeholder="Enter description" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group> */}
            </Col>
        </Row>

        <hr></hr>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <h3>Class Teacher:</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='email'>
                    <Form.Label>Select Classes</Form.Label>
                     <Form.Control as ="select" value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                     <option  value={'2nd'}>2nd</option>
                                   </Form.Control>
                </Form.Group>

                
            </Col>
            <Col xs={12} md={4} lg={3}>
            <Form.Group controlId='email'>
                    <Form.Label>Select Sections</Form.Label>
                     <Form.Control as ="select" value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'MP'}>MP</option>
                     <option  value={'BC'}>BC</option>
                     <option  value={'ECO'}>ECO</option>
                                   </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='email'>
                    <Form.Label>Select Courses</Form.Label>
                     <Form.Control as ="select" value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Math'}>Math</option>
                     <option  value={'Physics'}>Physics</option>
                     <option  value={'Chimie'}>Chimie</option>
                                   </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <hr></hr>
       
        <Row>
        <Col xs={12} md={4} lg={4}>
        <Form.Group controlId='gender'>
            <h3>Bus In Charge:</h3>
         <Form.Check type="checkbox" 
         label="Yes"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="No"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group>
            {/* <Form.Group controlId='login'>
            <h3>Login Details</h3>
         <Form.Check type="checkbox" 
         label="Disallow Login?"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Existing user"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="New user"
          value={isnewuser} 
          checked={isnewuser}
         onChange={(e)=>{
             setNewUser(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group> */}

                
            </Col>
            <Col xs={12} md={4} lg={4}>
            {/* <Form.Group controlId='gender'>
            <h3>Bus In Charge:</h3>
         <Form.Check type="checkbox" 
         label="Yes"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="No"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group> */}

                
            </Col>
  
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='login'>
            <h3>Status</h3>
         <Form.Check type="checkbox" 
         label="Active"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Inactive"
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
        {isnewuser&&<Row>
        <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='username'>
                    <Form.Label><span className="text-danger">*</span>Username</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label><span className="text-danger">*</span>Login Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label><span className="text-danger">*</span>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>}
    
        <hr></hr>
        <Row>
   
            <Col xs={12} md={12} lg={12}>
            <Button variant="success" style={{width:200,marginBottom:30,height:50}}>Save</Button>
            </Col>
            
        </Row>
        
        </>
    )
}

export default NewStaff
