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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const NewSchool = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)
    return (
        <>
        <h1 className="text-center">Add new school</h1>
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
                    <CInput id="text-input" name="text-input" placeholder="Name" />
                    <CFormText>Please enter the school name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">School Phone</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Phone" />
                    <CFormText>Please enter the school phone</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">School Email</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Email" autoComplete="Email"/>
                    <CFormText className="help-block">Please enter school email</CFormText>
                  </CCol>
                </CFormGroup>
               
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectLg">Select Shool Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CSelect custom size="lg" name="selectLg" id="selectLg">
                      <option value="0">Please select type</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Registration Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="email-input" name="text" placeholder="Registration number" autoComplete="Registration"/>
                    <CFormText className="help-block">Please enter school Registration number</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Admission Base Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="hf-email" name="enroll" placeholder="Admission Base Number..." autoComplete="Admission Base Number" />
                    <CFormText className="help-block">Please Admission Base Number</CFormText>
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
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Active</CLabel>
                    </CFormGroup>
                 
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Inactive</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"/>
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
                    <CInput type="text" id="hf-email" name="enroll" placeholder="Enrollment Prefix..." autoComplete="Enrollment Prefix" />
                    <CFormText className="help-block">Please Enrollment Prefixl</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Enrollment Base Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="hf-email" name="enroll" placeholder="Enrollment Base Number..." autoComplete="Enrollment Base Number" />
                    <CFormText className="help-block">Please Enrollment Base Number</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Admission Prefix</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="hf-email" name="enroll" placeholder="Admission Prefix..." autoComplete="Admission Prefix" />
                    <CFormText className="help-block">Please Admission Prefix</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Admission Base Padding</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="hf-email" name="enroll" placeholder="Admission Base Padding..." autoComplete="Admission Base Padding" />
                    <CFormText className="help-block">Please Admission Base Padding</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Registration Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
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
                      rows="7"
                      placeholder="school address..." 
                    />
                  </CCol>
                </CFormGroup>
              
              </CForm>
            </CCardBody>
           
          </CCard>
          
        
        </CCol>
        
       
      </CRow>
      <CRow>
      <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>  
      <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
      </CRow>
      
     
      </>
    )
}

export default NewSchool
