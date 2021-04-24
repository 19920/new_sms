import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState,useEffect} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
import Loader from 'react-loader-spinner'
import { useDispatch,useSelector } from 'react-redux';
import {getSchoolsClasses,getSchoolsTeachers,assignSubjectToSchool,getSchoolsSubjects } from './redux/actions/schoolActions';
const usersData=[
  {id:1,name:"Math",code:'math0001',type:'math',classes:['3rd','1st'],teachers:['John',"Raphaella"]},
  {id:2,name:"Physics",code:'phyh0001',type:'phy',classes:['2nd','4th'],teachers:['Kadahizi',"Michaella"]},
  {id:3,name:"Economie",code:'ecoh0001',type:'science',classes:['3rd','4th'],teachers:[]},

  
]
const AllSubject = ({history}) => {
    const dispatch = useDispatch();
    const [name,setName] = useState('')
    const [description,setdescription]= useState('')
    const [code,setCode] = useState('')
    const [teachersList,setTeachersList] = useState([])
    const [type,setType] = useState('')
    const[showForm,setShoForm] = useState(false)
    const [classList,setClassList] = useState([])
    

    const classeReducer = useSelector(state=>state.classeReducer)
    const schoolSubjects = useSelector(state=>state.schoolSubjects)
    const {loading:subjectsLoaiding,error:subjectsError,subjects} = schoolSubjects
    const schoolTeachers = useSelector(state=>state.schoolTeachers)
    const {loading:teacherLoading,error:teacherError,teachers} = schoolTeachers
    const {loading,error,classes} = classeReducer
    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser
    const assignedSubjectInfo=useSelector((state)=>state.assignedSubjectInfo)
    const {loading:assigningLoading,success,} = assignedSubjectInfo
    useEffect(()=>{
      if(!userInfo){
       history.push('/login')
      }
      if(success){
          setName('')
          setCode('')
          setdescription('')
          setClassList([])
          setTeachersList([])
          setType('')
          dispatch(getSchoolsClasses(userInfo.school)) 
          dispatch(getSchoolsTeachers(userInfo.school)) 
          dispatch(getSchoolsSubjects(userInfo.school)) 

      }
     dispatch(getSchoolsClasses(userInfo.school))
     dispatch(getSchoolsTeachers(userInfo.school))
     dispatch(getSchoolsSubjects(userInfo.school))
  },[dispatch,userInfo,success  ])
  const handleChange=(e)=>{
    setTeachersList(Array.from(e.currentTarget.selectedOptions, (v) => v.value));
  }
  const handleClassChange=(e)=>{
  setClassList(Array.from(e.currentTarget.selectedOptions, (v) => v.value));
}
const onSubmitHandler=(e)=>{
  dispatch(assignSubjectToSchool({
      name:name,
      description:description,
      type:type,
      classes:classList,
      teachers:teachersList,
      code:code
  }))
}
  console.log("subjects",subjects)
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
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter phone" value={name} onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='type'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Subject Type: </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={type} onChange={(e)=>setType(e.target.value)}>
                     <option  value={'Select Subject Type'}>Select Subject Type</option>
                     <option  value={'Theory'}>Theory</option>
                     <option  value={'Practical'}>Practical</option>
                     <option  value={'Subjective'}>Subjective</option>
                     <option  value={'Objective'}>Objective</option>
                    
                                   </Form.Control>
                </Form.Group>
                <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Teachers: </Form.Label>
                     <Form.Control as ="select" multiple  style={{height:'auto'}} value={teachersList}
                      onChange={handleChange}
                      
                      >
                     {teachers&&teachers.map(classItem=>{
                         return <option key={classItem._id} value={classItem.firstName+' '+ classItem.lastName}>{classItem.firstName+' '+ classItem.lastName}</option>
                     })}
                    
                    
                                   </Form.Control>
                </Form.Group>

            </Col>
            <Col sm={12} md={6} lg={6}>
            <Form.Group controlId='code'>
                    <Form.Label>Subject Code</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter subject code" value={code} onChange={(e)=>setCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Select Class: </Form.Label>
                     <Form.Control as ="select" multiple  style={{height:'auto'}} value={classList} 
                     onChange={handleClassChange}>
                     {classes&&classes.map(classItem=>{
                         return <option key={classItem._id} value={classItem.name}>{classItem.name}</option>
                     })}
                    
                    
                                   </Form.Control>
                </Form.Group>
                <Form.Group controlId='desc'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as ="textarea" rows={10} style={{height:50}}  type="text" placeholder="Enter description" value={description} onChange={(e)=>setdescription(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <CButton onClick={(e)=>onSubmitHandler(e)} type="button" size="sm" color="info"><CIcon name="cil-scrubber" />Save</CButton>  
            </Col>
            
        </Row>}
       
        <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All Subjects</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search subject by name" />
    </CForm>
    {subjectsLoaiding|| assigningLoading?<section className="container">
          <center>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={8000} //3 secs

            />
          </center>
        </section>:
         <Table striped bordered hover responsive className="table-sm">
         <thead className="bg-info">
             <tr>
                
                 <th>SUBJECT NAME</th>
                 <th>SUBJECT CODE</th>
                 <th>SUBJECT TYPE</th>
                 <th>CLASSES</th>
                 <th>TEACHERS</th>
                 <th></th>
             </tr>
         </thead>
         <tbody>
         {subjects&&subjects.map(product=>(
         <tr key={product.id}>
                       
                     <td>{product.name}</td>
                     <td>{product.code}</td>
                     <td>{product.type}</td>
                     <td>{product.classes.map((c,index)=>(<p key={index}>{c}</p>))}</td>
                     <td>
                        {product.teachers.length>0?product.teachers.map((t,index)=>{
                            return(
                                <Row key={index}>
                                    <Col sm={9} md={9} lg={9}>
                                    <ul>
                                    <li >{t} {' '} </li>
                                    </ul>
                                    </Col>
                                    <Col sm={3} md={3} lg={3}>
                                    <Button variant="light" className="btn-sm text-danger">
                            X
                             </Button>
                                    </Col>
                                </Row>
                            )
                        }):
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
        }
           
  </CCol>
        </CRow>
            
        </>
    )
}

export default AllSubject

