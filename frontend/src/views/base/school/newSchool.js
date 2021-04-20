import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { adminCreateSchool } from './redux/actions/schoolActions'
import { SCHOOL_CREATE_REQUEST_RESET } from './redux/constants/schoolTypes'

const NewSchool = ({history}) => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)
    const [name,setName] =React.useState('')
    const [type,settype] =React.useState('')
    const [description,setdescription] =React.useState('')
    const [registrationNumber,setregistrationNumber] =React.useState('')
    const [phonenumber,setphonenumber] =React.useState('')
    const [email,setemail] =React.useState('')
    const [ownerPhoneNumber,setownerPhoneNumber] =React.useState('')
    const [ownerEmail,setownerEmail] =React.useState('')
    const [schoolPhoto,setschoolPhoto] =React.useState('')
    const [numberOfemployees,setnumberOfemployees] =React.useState('')
    const [numberOfStudents,setnumberOfStudents] =React.useState('')
    const [numberOfSections,setnumberOfSections] =React.useState('')
    const [category,setcategory] =React.useState('')
    const [numberOfClasses,setnumberOfClasses] =React.useState('')
    const [admissionBaseNumber,setadmissionBaseNumber] =React.useState('')
    const [enrollmentPrefix,setenrollmentPrefix] =React.useState('')
    const [admissionPrefix,setadmissionPrefix] =React.useState('')
    const [admissionBasePadding,setadmissionBasePadding] =React.useState('')
    const [status,setstatus] =React.useState('')
    const [address,setaddress] =React.useState('')
    const [registrationdate,setregistrationdate] =React.useState('')
    const [enrollmentBaseNumber,setenrollmentBaseNumber] =React.useState('')
    const [error,seterror] = React.useState(null)
    const dispatch=useDispatch()
  
    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser
    const createReducer =useSelector(state=>state.createschoolReducer)
    const {loading,success} = createReducer
   

    useEffect(()=>{
      if(!userInfo){
        history.push("/login")
    }
      if(success){
          dispatch({type:SCHOOL_CREATE_REQUEST_RESET})
          
      }
      
   },[dispatch,history,success,userInfo])

    const onsubmitSchool=(e)=>{
      e.preventDefault()
      dispatch(adminCreateSchool({
        name,
        type,
        description,
        status:"Active",
        numberOfSections,
        numberOfStudents,
        numberOfemployees,
        numberOfClasses,
        registrationNumber,
        registrationdate,
        schoolPhoto,
        admissionBaseNumber,
        admissionBasePadding,
        admissionPrefix,
        phonenumber,
        enrollmentBaseNumber,
        enrollmentPrefix,
        address,
        ownerEmail,
        ownerPhoneNumber,
        email

        


      }))
    }

    return (
        <>
        <h1 className="text-center">Add new school</h1>
        {error&&<h3 className="text-center">{error}</h3>}
        {success&&<h3 className="text-center text-succes">School created successful</h3>}
        {loading?<h3 className="text-center text-succes">Loading ....</h3>:
         <CRow>
         <CCol xs="12" md="">
           <CCard>
             
             <CCardBody>
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                 {/* <CFormGroup row>
                   <CCol md="3">
                     <CLabel>Static</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <p className="form-control-static">Username</p>
                   </CCol>
                 </CFormGroup> */}
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="text-input">School Name</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput id="text-input" name="text-input" placeholder="Name" 
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     />
                     <CFormText>Please enter the school name</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="text-input">School Phone</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput id="text-input" name="text-input" placeholder="Phone"  value={phonenumber}
                     onChange={(e)=>setphonenumber(e.target.value)}/>
                     <CFormText>Please enter the school phone</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input">School Email</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="email" id="email-input" name="email-input" placeholder="Email" autoComplete="Email"
                      value={email}
                      onChange={(e)=>setemail(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school email</CFormText>
                   </CCol>
                 </CFormGroup>
                
                
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="selectLg">Select Shool Type</CLabel>
                   </CCol>
                   <CCol xs="12" md="9" size="lg">
                     <CSelect custom size="lg" name="selectLg" id="selectLg"
                      value={type}
                      onChange={(e)=>settype(e.target.value)}
                     >
                  
                       <option value="Secondary School">Secondary School</option>
                       <option value="Primary School">Primary School</option>
                       <option value="Marterinary School">Marterinary School</option>
                     </CSelect>
                   </CCol>
                 </CFormGroup>
               
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input">Registration Number</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="email-input" name="text" placeholder="Registration number" 
                     autoComplete="Registration"
                     value={registrationNumber}
                      onChange={(e)=>setregistrationNumber(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school Registration number</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="hf-email">Admission Base Number</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="hf-email" name="enroll" placeholder="Admission Base Number..." 
                     autoComplete="Admission Base Number" 
                     value={admissionBaseNumber}
                      onChange={(e)=>setadmissionBaseNumber(e.target.value)}
                     />
                     <CFormText className="help-block">Please Admission Base Number</CFormText>
                   </CCol>
                 </CFormGroup>
          
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input"> Number of Employees</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="email-input" name="text" placeholder="Registration number" 
                     autoComplete="Registration"
                     value={numberOfemployees}
                      onChange={(e)=>setnumberOfemployees(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school  number of employees</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input">Number of Classes</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="email-input" name="text" placeholder="Registration number" 
                     autoComplete="Registration"
                     value={numberOfClasses}
                      onChange={(e)=>setnumberOfClasses(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school number of classes</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input">Number of Students</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="email-input" name="text" placeholder="Number of students" 
                     autoComplete="Registration"
                     value={numberOfStudents}
                      onChange={(e)=>setnumberOfStudents(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school Number of students</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input">Number of Sections</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="email-input" name="text" placeholder="Registration number" 
                     autoComplete="Registration"
                     value={numberOfSections}
                      onChange={(e)=>setnumberOfSections(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school  number of sections</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="selectLg">Select Shool Category</CLabel>
                   </CCol>
                   <CCol xs="12" md="9" size="lg">
                     <CSelect custom size="lg" name="selectLg" id="selectLg"
                      value={category}
                      onChange={(e)=>setcategory(e.target.value)}
                     >
                  
                       <option value="Public">Public</option>
                       <option value="Private">Private</option>
                       <option value="Mixed">Mixed</option>
                     </CSelect>
                   </CCol>
                 </CFormGroup>
 
               </CForm>
             </CCardBody>
            
           </CCard>
          
         </CCol>
         <CCol xs="12" md="6">
           <CCard>
             <CCardBody>
               <CForm action="" method="post" className="form-horizontal">
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="hf-email">Enrollment Prefix</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="hf-email" name="enroll" placeholder="Enrollment Prefix..." 
                     autoComplete="Enrollment Prefix" 
                     value={enrollmentPrefix} 
                        
                      onChange={(e)=>setenrollmentPrefix(e.target.value)}/>
                     <CFormText className="help-block">Please Enrollment Prefixl</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="hf-email">Enrollment Base Number</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="hf-email" name="enroll" placeholder="Enrollment Base Number..." 
                     autoComplete="Enrollment Base Number" 
                     value={enrollmentBaseNumber} 
                        
                      onChange={(e)=>setenrollmentBaseNumber(e.target.value)}
                     />
                     <CFormText className="help-block">Please Enrollment Base Number</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="hf-email">Admission Prefix</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="hf-email" name="enroll" placeholder="Admission Prefix..." 
                     autoComplete="Admission Prefix" 
                     value={admissionPrefix} 
                        
                     onChange={(e)=>setadmissionPrefix(e.target.value)}
                     />
                     <CFormText className="help-block">Please Admission Prefix</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="hf-email">Admission Base Padding</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="hf-email" name="enroll" placeholder="Admission Base Padding..." 
                     autoComplete="Admission Base Padding" 
                     value={admissionBasePadding} 
                        
                     onChange={(e)=>setadmissionBasePadding(e.target.value)}
                     />
                     <CFormText className="help-block">Please Admission Base Padding</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="date-input">Registration Date</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" 
                      value={registrationdate} 
                        
                      onChange={(e)=>setregistrationdate(e.target.value)}
                     />
                   </CCol>
                 </CFormGroup>
               
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="email-input">Registration Number</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CInput type="text" id="email-input" name="text" placeholder="Registration number" 
                     autoComplete="Registration"
                     value={registrationNumber}
                      onChange={(e)=>setregistrationNumber(e.target.value)}
                     />
                     <CFormText className="help-block">Please enter school Registration number</CFormText>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel>Status</CLabel>
                   </CCol>
                   <CCol md="9">
                     <CFormGroup variant="custom-checkbox" inline>
                       <CInputCheckbox 
                         custom 
                         id="inline-checkbox1" 
                         name="inline-checkbox1" 
                         value={status} 
                        
                      onChange={(e)=>setstatus(e.target.value)}
                       />
                       <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Active</CLabel>
                     </CFormGroup>
                  
                     <CFormGroup variant="custom-checkbox" inline>
                       <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value={status} 
                       
                        
                       onChange={(e)=>setstatus(e.target.value)}
                       
                       />
                       <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Inactive</CLabel>
                     </CFormGroup>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                   <CCol xs="12" md="9">
                     <CInputFile id="file-input" name="file-input" value={schoolPhoto} 
                        
                        onChange={(e)=>setschoolPhoto(e.target.value)}/>
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="textarea-input">Address</CLabel>
                   </CCol>
                   <CCol xs="12" md="9">
                     <CTextarea 
                       name="textarea-input" 
                       id="textarea-input" 
                       rows="3"
                       placeholder="school address..." 
                       value={address} 
                        
                       onChange={(e)=>setaddress(e.target.value)}
                     />
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
                       placeholder="school description..." 
                       value={description} 
                        
                       onChange={(e)=>setdescription(e.target.value)}
                     />
                   </CCol>
                 </CFormGroup>
               </CForm>
             </CCardBody>
            
           </CCard>
           
         
         </CCol>
         
        
       </CRow>
        }
       
      <CRow>
      <CButton onClick={(e)=>onsubmitSchool(e)} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>  
      <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
      </CRow>
      
     
      </>
    )
}

export default NewSchool
