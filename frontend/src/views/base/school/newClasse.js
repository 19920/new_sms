import React,{useState,useEffect} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch,
    CBadge,
    CDataTable,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
  import {LinkContainer} from 'react-router-bootstrap'
  import { useDispatch,useSelector } from 'react-redux';
import { assignClassToSchool, getSchoolsClasses } from './redux/actions/schoolActions';
  const usersData=[
    {id:1,name:"4th",section:'MP',totalStudents:30,addedAt:"2021-04-15",action:'Edit,Delete'},
    {id:2,name:"3rd",section:'BC',totalStudents:10,addedAt:"2021-04-15",action:'Edit,Delete'},
    {id:3,name:"2nd",section:'',totalStudents:150,addedAt:"2021-04-15",action:'Edit,Delete'},
    
]
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['id','name','numberOfSections','totalStudents',"teacher","addedAt","action"]
const NewClass = ({match,history}) => {
    const[showForm,setShowForm] = useState(false)
    const schoolId = match.params.id
    const dispatch= useDispatch()
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [section,setSection] = useState('')
    const [numberOfStudents,setNumberOfStudents] = useState('')

    const classeReducer = useSelector(state=>state.classeReducer)
    const {loading,error,classes} = classeReducer
    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser
    const assignedClassInfo=useSelector((state)=>state.assignedClassInfo)
    const {loading:assigningLoading,success,assignedClass} = assignedClassInfo
    useEffect(()=>{
      if(!userInfo){
       history.push('/login')
      }
      if(success){
          setName('')
          setDescription('')
          setSection('')
          setNumberOfStudents('')
          dispatch(getSchoolsClasses(userInfo.school)) 
      }
     dispatch(getSchoolsClasses(userInfo.school))
  },[dispatch,userInfo,success])
  const onSumbitUser=(e)=>{
    e.preventDefault()
    dispatch(assignClassToSchool(name,description,section,numberOfStudents))
   }
  console.log("classes",classes)
    return (
        <>
         <button 
    onClick={()=>setShowForm(!showForm)}
    className="btn btn-success btn-lg pull-right mb-2">{showForm?"Hide Form":"Add new class"}</button>
        {
            showForm&&<>
            <h1 className="text-center">Add new class</h1>
        <CRow>
          
        <CCol xs="12" md="">
          <CCard>
            
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Class Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <CFormText>Please enter the class name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="7"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      placeholder="class description..." 
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                  <CLabel htmlFor="ccmonth">Section</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CSelect custom name="ccmonth" id="ccmonth" value={section} onChange={(e)=>setSection(e.target.value)}>
                    <option value="Primary">Primary</option>
                       <option value="MP">MP</option>
                       <option value="BC">BC</option>
                       <option value="ECO">ECO</option>
                       <option value="SC">SC</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
               
                   <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Number of Students</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Number of students" 
                    value={numberOfStudents}
                    onChange={(e)=>setNumberOfStudents(e.target.value)}
                    />
                    <CFormText>Please enter the class name</CFormText>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={(e)=>onSumbitUser(e)} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              { ' '}
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
        
       
      </CRow>
            </>

        }
     
 
     {classes&&classes.length>0?
       <CRow>

       <CCol xs="12" lg="12">
     
    
 
   
 
     <h1 className="text-center pt-5">All Classes</h1>
     <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
    <CInput id="text-input" name="text-input" placeholder="Search section by name" />
     </CForm>
     {assigningLoading?<h5>loading....</h5> :
     <Table striped bordered hover responsive className="table-sm">
     <thead className="bg-info">
         <tr>
             <th>ID</th>
             <th>NAME</th>
             <th>SECTION</th>
             <th>TOTAL STUDENTS</th>
             <th>ADDED AT</th>
             <th>ACTION</th>
         </tr>
     </thead>
     <tbody>
     {classes&&classes.map(product=>(
     <tr key={product.id}>
                   <td>{product.id}</td>
                 <td>{product.name}</td>
                 <td>{product.section} {' '} <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                        <a className="btn-sm text-success text-right">manage</a>
                     </LinkContainer></td>
                 <td>{product.numberOfStudents}</td>
               
                 <td>{product.createdAt}</td>
                 
                 
                 <td>
                     <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                         <Button variant="success" className="btn-sm">
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
     :<CRow>
      <CCol xs="12" lg="12">
      <h1 className="text-center pt-5">No Classes available</h1>
      </CCol>
       </CRow>
       }
    

      </>
    )
}

export default NewClass
