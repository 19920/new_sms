import React from 'react'
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
  const usersData=[
    {id:1,name:"4th",numberOfSections:10,totalStudents:30,teacher:'John Kadahizi',addedAt:"2021-04-15",action:'Edit,Delete'},
    {id:2,name:"3rd",numberOfSections:3,totalStudents:10,teacher:'John Kadahizi',addedAt:"2021-04-15",action:'Edit,Delete'},
    {id:3,name:"2nd",numberOfSections:2,totalStudents:150,teacher:'John Kadahizi',addedAt:"2021-04-15",action:'Edit,Delete'},
    
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
const NewClass = () => {
    return (
        <>
 <h1 className="text-center">Add new class</h1>
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
                    <CLabel htmlFor="text-input">Class Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name" />
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
                      placeholder="class description..." 
                    />
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              { ' '}
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
        
       
      </CRow>
     
      <CRow>


<CCol xs="12" lg="12">

  <CCard>
  <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
 <CInput id="text-input" name="text-input" placeholder="Search class by name" />
  </CForm>
  <h1 className="text-center pt-5">All Classes</h1>
    <CCardBody>
    <CDataTable
      items={usersData}
      fields={fields}
      striped
      itemsPerPage={5}
      pagination
      scopedSlots = {{
        'status':
          (item)=>(
            <td>
              <CBadge color={getBadge(item.status)}>
                {item.status}
              </CBadge>
            </td>
          )

      }}
    />
    </CCardBody>
  </CCard>
</CCol>
</CRow>

      </>
    )
}

export default NewClass
