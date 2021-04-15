import React from 'react'
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
  import CIcon from '@coreui/icons-react'



  import { DocsLink } from 'src/reusable'
  
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


const NewSection = () => {
    return (
        <>
        <h1 className="text-center pt-5">Add New Section</h1>

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
                    <CLabel htmlFor="text-input">Section Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name" />
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
                      placeholder="section description..." 
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
          
      </CRow>
      <CRow>


        <CCol xs="12" lg="12">
          <CCard>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
 <CInput id="text-input" name="text-input" placeholder="Search section by name" />
  </CForm>
        
            <h1 className="text-center pt-5">All Sections</h1>
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

export default NewSection
