import React,{useState,useEffect} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CBadge,
    CDataTable,
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
  import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
  import CIcon from '@coreui/icons-react'
  import {LinkContainer} from 'react-router-bootstrap'
  import {useDispatch,useSelector} from 'react-redux';
  import Loader from 'react-loader-spinner'
  import { DocsLink } from 'src/reusable'
import { assignSectionToSchool,getSchoolsSections } from './redux/actions/schoolActions';
  
  const usersData=[
      {id:1,name:"MP",description:"Math-Physics",addedAt:"2021-04-15",action:'Edit,Delete'},
      {id:2,name:"BC",description:"Bio-Chimie",addedAt:"2021-04-13",action:'Edit,Delete'},
      {id:4,name:"ECO",description:"Economie",addedAt:"2021-04-12",action:'Edit,Delete'},
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
  const fields = ['id','name','description',"addedAt","action"]


const NewSection = ({history}) => {
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const[showForm,setShowForm] = useState(false)

    const loggedInuser = useSelector((state)=>state.user);
    const {userInfo} = loggedInuser
    const schoolSections = useSelector((state)=>state.schoolSections);
    const {loading,sections} = schoolSections
    const assignedSectionsInfo=useSelector((state)=>state.assignedSectionsInfo)
    const {loading:assigningLoading,success,} = assignedSectionsInfo
    const onsubmit=(e)=>{
      dispatch(assignSectionToSchool({
        name:name,
        description:description
      }))
    }
    useEffect(() => {
      if(!userInfo){
        history.push('/login')
       }
      if(success){
        dispatch(getSchoolsSections(userInfo.school))
      }
      dispatch(getSchoolsSections(userInfo.school))
    }, [dispatch,userInfo,success])
    console.log("sections",sections)
    return (
        <>
          <button 
    onClick={()=>setShowForm(!showForm)}
    className="btn btn-success btn-lg pull-right mb-2">{showForm?"Hide Form":"Add new section"}</button>
       {showForm&&<>
        <h1 className="text-center pt-5">Add New Section</h1>

        <CRow>
          
        <CCol xs="12" md="">
          <CCard>
            
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Section Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" 
                    name="text-input" 
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                    <CFormText>Please enter the section name</CFormText>
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
                      placeholder="section description..." 
                    />
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton 
              type="submit" 
              size="sm" 
              color="primary"
              onClick={(e)=>onsubmit(e)}
              >
              <CIcon name="cil-scrubber" /> Submit</CButton>
              { ' '}
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
        
       
      </CRow>
      <CRow>
          
      </CRow>
       </>}

      <CRow>


        <CCol xs="12" lg="12">
         
  <h1 className="text-center pt-5">All Sections</h1>

  <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
 <CInput id="text-input" name="text-input" placeholder="Search section by name" />
  </CForm>
  {loading|| assigningLoading?<section className="container">
          <center>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={8000} //3 secs

            />
          </center>
        </section>:<Table striped bordered hover responsive className="table-sm">
      <thead className="bg-info">
          <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>ADDED AT</th>
              <th>ACTION</th>
             
              
              
          </tr>
      </thead>
      <tbody>
      {sections&&sections.map(product=>(
      <tr key={product.id}>
                    <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
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

  


     
      </>
    )
}

export default NewSection
