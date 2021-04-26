import React,{useState,useEffect} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import{useDispatch,useSelector} from 'react-redux'
import { addStaffToSchool } from './redux/actions/schoolStaffActions';
import { getSchoolsClasses,getSchoolsSections,getSchoolsSubjects } from './redux/actions/schoolActions';
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
    const [yesGender,setYesGender] = useState(false)
    const [noGender,setNoGender] = useState(false)
    const [isbussInCharge,setIsbussInCharge] = useState('')
    const [joiningDate,setJoiningDate] = useState('')
    const [role,setRole] = useState('')
    const [salary,setSalary] = useState('')
    const [status,setStatus] = useState('')
    const [yesStatus,setYesStatus] = useState(false)
    const [noStatus,setNoStatus] = useState(false)
    const [designation,setDesignation] = useState('')

    const [isBusCharge,setBusInCharge] = useState(false)
    const [yes,setYes] = useState(false)
    const [no,setNo] = useState(false)
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState('')

    const [classList,setClassList] = useState([])
    const [sectionList,setSectionList] = useState([])
    const [subjectList,setSubjectList] = useState([])

    const schoolSubjects = useSelector(state=>state.schoolSubjects)
    const {loading:subjectsLoaiding,error:subjectsError,subjects} = schoolSubjects

    const schoolSections = useSelector((state)=>state.schoolSections);
    const {loading,sections} = schoolSections


    const classeReducer = useSelector(state=>state.classeReducer)
    const {loading:classLoading,error:classError,classes} = classeReducer


    const assignedStaffInfo=useSelector((state)=>state.assignedStaffInfo)
    const {loading:assigningLoading,success,} = assignedStaffInfo
    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser

      useEffect(() => {
        if(!userInfo){
          history.push('/login')
         }
         if(success){
             setFirstName('')
             setLastName('')
             setPhone('')
         }
        dispatch(getSchoolsSections(userInfo.school))
        dispatch(getSchoolsSubjects(userInfo.school))
        dispatch(getSchoolsClasses(userInfo.school))
      }, [dispatch,userInfo,success])

      const handleSectionChange=(e)=>{
        setSectionList(Array.from(e.currentTarget.selectedOptions, (v) => v.value));
      }
      const handleClassChange=(e)=>{
      setClassList(Array.from(e.currentTarget.selectedOptions, (v) => v.value));
    }
    const handleSubjectChange=(e)=>{
        setSubjectList(Array.from(e.currentTarget.selectedOptions, (v) => v.value));
      }
      const onsubmit=()=>{
        //   const staff={
        //     firstname:firstname,
        //     lastname:lastname,
        //     phone:phone,
        //     address:address,
        //     email:email,
        //     birthday:dateOfBirth,
        //     nationalId:nationalId,
        //     gender:gender,
        //     joiningDate:joiningDate,
        //     role:role,
        //     description:description,
        //     salary:salary,
        //     designation:designation,
        //     classes:classList,
        //     sections:sectionList,
        //     courses:subjectList,
        //     isbussInCharge:isbussInCharge,
        //     status:status

        //   }
        //   console.log("staff",staff)
          dispatch(addStaffToSchool({
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            address:address,
            email:email,
            birthday:dateOfBirth,
            nationalId:nationalId,
            gender:gender,
            joiningDate:joiningDate,
            role:role,
            description:description,
            salary:salary,
            designation:designation,
            classes:classList,
            sections:sectionList,
            courses:subjectList,
            isbussInCharge:isbussInCharge,
            status:status


          }))
      }
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
          value={yesGender} 
          checked={yesGender}
         onChange={(e)=>{
             setYesGender(e.target.checked)
             setNoGender(false)
             setGender('Male')
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Female"
          value={noGender} 
          checked={noGender}
         onChange={(e)=>{
             setNoGender(e.target.checked)
             setYesGender(false)
             setGender('Female')
             
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
                    <Form.Control style={{height:50}} type="date" 
                    placeholder="Enter date of birth" 
                    value={dateOfBirth} 
                    onChange={(e)=>setDateOfBirth(e.target.value)}>

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
                    <Form.Control  style={{height:50}} type="date" 
                    placeholder="Enter date of birth" value={joiningDate} onChange={(e)=>setJoiningDate(e.target.value)}>

                    </Form.Control>
                </Form.Group>
          

                <Form.Group controlId='salary'>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="0" value={salary} onChange={(e)=>setSalary(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={3}>
            <Form.Group controlId='role'>
                    <Form.Label>Role</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)}>
                    </Form.Control>
                </Form.Group>
     <Form.Group controlId='designation'>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control style={{height:50}} type="text"
                     placeholder="Enter designation" 
                     value={designation} onChange={(e)=>setDesignation(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as ="textarea" rows={8}   type="text" placeholder="Enter description" value={description} 
                    onChange={(e)=>setDescription(e.target.value)}>
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
            <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select" multiple  style={{height:'auto'}} value={classList} 
                     onChange={handleClassChange}>
                     {classes&&classes.map(classItem=>{
                         return <option key={classItem._id} value={classItem.name}>{classItem.name}</option>
                     })}
                    
                    
                                   </Form.Control>
                </Form.Group>

                
            </Col>
            <Col xs={12} md={4} lg={3}>

            <Form.Group controlId='email'>
                    <Form.Label>Select Sections</Form.Label>
                    <Form.Control as ="select" multiple  style={{height:'auto'}} value={sectionList}
                      onChange={handleSectionChange}
                      
                      >
                     {sections&&sections.map(sectionItem=>{
                         return <option key={sectionItem._id} value={sectionItem.name}>{sectionItem.name}</option>
                     })}
                    
                    
                                   </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='email'>
                    <Form.Label>Select Courses</Form.Label>
                    <Form.Control as ="select" multiple  style={{height:'auto'}} value={subjectList}
                      onChange={handleSubjectChange}
                      
                      >
                     {subjects&&subjects.map(subjectItem=>{
                         return <option key={subjectItem._id} value={subjectItem.name}>{subjectItem.name}</option>
                     })}
                    
                    
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
          value={yes} 
          checked={yes}
         onChange={(e)=>{
             setYes(e.target.checked)
             setIsbussInCharge(true)
             setNo(false)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="No"
          value={no} 
          checked={no}
         onChange={(e)=>{
             setNo(e.target.checked)
            setIsbussInCharge(false)
            setYes(false)

             
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
          value={yesStatus} 
          checked={yesStatus}
         onChange={(e)=>{
             setYesStatus('Active')
             setStatus('Active')
             setNoStatus(false)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Inactive"
          value={noStatus} 
          checked={noStatus}
         onChange={(e)=>{
            setStatus('Inactive')
            setYesStatus(false)
             
         }
         }>

         </Form.Check>
         
     </Form.Group>

                
            </Col>
            
            
        </Row>
        {isnewuser&&<Row>
        <Col xs={12} md={4} lg={4}>
            {/* <Form.Group controlId='username'>
                    <Form.Label><span className="text-danger">*</span>Username</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter username" value={userName} onChange={(e)=>setUserName(e.target.value)}>
                    </Form.Control>
                </Form.Group> */}

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
    
        <hr></hr>
        <Row>
   
            <Col xs={12} md={12} lg={12}>
            <Button 
            onClick={(e)=>onsubmit(e)}
            variant="success" 
            style={{width:200,marginBottom:30,height:50}}>Save</Button>
            </Col>
            
        </Row>
        
        </>
    )
}

export default NewStaff
