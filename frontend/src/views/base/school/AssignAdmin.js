import React,{useState,useEffect} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { getSchoolsUsers,assignUserToSchool } from './redux/actions/schoolActions';

const usersData=[
    {id:1,name:"John Kadahizi",userName:"JB",email:"jkadahizi@gmail.com",assigendBy:"Kadahizi"},
    {id:2,name:"Daniella Kadahizi",userName:"JB",email:"jkadahizi@gmail.com",assigendBy:"Kadahizi"},
    {id:3,name:"Michaellla Kadahizi",userName:"JB",email:"jkadahizi@gmail.com",assigendBy:"Kadahizi"},
  
    
  ]
const AssignAdmin = ({match,history}) => {
    const schoolId = match.params.id
    const dispatch= useDispatch()
    console.log("schoolId",schoolId)
    const [email,setEmail] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [role,setRole] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [isExistingUser,setexistingUser] = useState(false)
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState(false)
    const [isparentnewuser,setParentnewuser] = useState('')
    const schoolUsers = useSelector(state=>state.schoolUsers)
    const {loading,error,users} = schoolUsers
    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser
    const assignedUserInfo=useSelector((state)=>state.assignedUserInfo)
    const {loading:assigningLoading,success,assignedUser} = assignedUserInfo
    useEffect(()=>{
        if(!userInfo){
         history.push('/login')
        }
        if(success){
            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
            dispatch(getSchoolsUsers(schoolId)) 
        }
       dispatch(getSchoolsUsers(schoolId))
    },[dispatch,userInfo,success])
    console.log("users in assignadmin",users)
    const onSumbitUser=(e)=>{
     e.preventDefault()
     dispatch(assignUserToSchool(schoolId,email,password,firstName,lastName,role))
    }
    return (
        <>  
        <Row>
            <Col xs={12} md={4} lg={4}>
            <LinkContainer to={`/all-schools`}>
            <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" />Back </CButton>  
            </LinkContainer>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <h1 className="text-center">Add new user to school</h1>
            </Col>
            <Col xs={12} md={4} lg={4}>
           
            </Col>
        </Row>
          
        <hr></hr>
        
        <Row>
        <Col xs={12} md={4} lg={4}>
        <Form.Group controlId='login'>
            <h3>Assign super user</h3>
         <Form.Check type="checkbox" 
         label="Existing user"
          value={isExistingUser} 
          checked={isExistingUser}
         onChange={(e)=>{
             setexistingUser(e.target.checked)
             setNewUser(false)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="New user"
          value={isnewuser} 
          checked={isnewuser}
         onChange={(e)=>{
             setNewUser(e.target.checked)
             setexistingUser(false)
             
         }
         }>

         </Form.Check>
     </Form.Group>

                
            </Col>
 
        </Row>
        {isnewuser&&<Row>
        <Col xs={12} md={12} lg={12}>
           

           <Form.Group controlId='firstName'>
                       <Form.Label><span className="text-danger">*</span>Firstname</Form.Label>
                       <Form.Control  
                        style={{height:50}} type="text" placeholder="Enter first name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='lastName'>
                       <Form.Label><span className="text-danger">*</span>lastname</Form.Label>
                       <Form.Control  
                        style={{height:50}} type="text" placeholder="Enter lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='username'>
                   <Form.Label><span className="text-danger">*</span>Role</Form.Label>
                   <Form.Control as="select" type="text" value={role} onChange={(e)=>setRole(e.target.value)}>
                      <option value="Teacher">Teacher</option>
                       <option value="Admin">Admin</option>
                       <option value="Librarian">Librarian</option>
                       <option value="Economist">Economist</option>
                       <option value="TransportAdmin">TransportAdmin</option>
                       <option value="Student">Student</option>
                       <option value="Parent">Parent</option>
                   </Form.Control>
                   </Form.Group>
                
   
                   <Form.Group controlId='email'>
                       <Form.Label><span className="text-danger">*</span>Login Email</Form.Label>
                       <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='password'>
                       <Form.Label><span className="text-danger">*</span>Password</Form.Label>
                       <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
               </Col>
        </Row>}
        {isExistingUser&&<Row>
        <Col xs={12} md={12} lg={12}>
           

           <Form.Group controlId='firstName'>
                       <Form.Label><span className="text-danger">*</span>Names</Form.Label>
                       <Form.Control  
                        style={{height:50}} type="text" placeholder="Enter first name" value={email} onChange={(e)=>setEmail(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
                  
               <Form.Group controlId='username'>
                       <Form.Label><span className="text-danger">*</span>Username</Form.Label>
                       <Form.Control  
                        style={{height:50}} type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}>
                       </Form.Control>
                   </Form.Group>
   
               </Col>
        </Row>}
        <hr></hr>
        <Row>
   
            <Col xs={12} md={12} lg={12}>
            <Button  onClick={(e)=>onSumbitUser(e)} variant="success" style={{width:200,marginBottom:30,height:50}}>Assign Super User</Button>
            </Col>
            
        </Row>
        <hr></hr>
       {users&&users.length>0?
        <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All School Users </h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search user by name" />
    </CForm>
          {assigningLoading?<h5>loading....</h5> :<Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {users&&users.sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).map(product=>(
        <tr key={product.id}>
                      <td>{product._id}</td>
                    <td>{product.firstName}</td>
                    <td>{product.lastName}</td>
                    <td>{product.email}</td>
                    <td>{product.role}</td>
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
  
    </Table>}
  </CCol>
  </CRow>
       :
       <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">No School users available </h1>
    </CCol>
    </CRow>
       }
       
        </>
    )
}

export default AssignAdmin
