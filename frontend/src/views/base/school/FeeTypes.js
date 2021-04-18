import React,{useState} from 'react'
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


  import { DocsLink } from 'src/reusable'
  
  const usersData=[
      {id:1,name:"Admission Fee",amount:20000,from:"2021-04-15",period:'One Time',action:'Edit,Delete'},
      {id:2,name:"Uniform Fee",amount:5000,from:"2021-02-15",period:'Annually',action:'Edit,Delete'},
      {id:4,name:"Books Fee",amount:10000,from:"2021-01-15",period:'Annually',action:'Edit,Delete'},
  ]
const FeeTypes = () => {
    const[showForm,setShowForm] = useState(false)
    return (
        <>
                     <button 
    onClick={()=>setShowForm(!showForm)}
    className="btn btn-success btn-lg pull-right mb-2">{showForm?"Hide Form":"Add new section"}</button>
       {showForm&&<>
        <h1 className="text-center pt-5">Add New Fee Type</h1>

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
                    <CLabel htmlFor="text-input">Fee Type Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name" />
                    <CFormText>Please enter type name</CFormText>
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
       </>} 
       <CRow>


<CCol xs="12" lg="12">
 
<h1 className="text-center pt-5">All Fee Types</h1>

<CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
<CInput id="text-input" name="text-input" placeholder="Search section by name" />
</CForm>
  <Table striped bordered hover responsive className="table-sm">
<thead className="bg-info">
  <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AMOUNT</th>
      <th>PERIOD</th>
      <th>DATE</th>
      <th>ACTION</th>
     
      
      
  </tr>
</thead>
<tbody>
{usersData&&usersData.map(product=>(
<tr key={product.id}>
            <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.amount}</td>
          <td>{product.period}</td>
          <td>{product.from}</td>
          
          
          <td>
          <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="success" className="btn-sm mr-2">
                  <i className="fas fa-edit"></i>
                  View
                  </Button>
              </LinkContainer>
              <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                  <Button variant="warning" className="btn-sm mr-2">
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
</CCol>
</CRow>
        </>
    )
}

export default FeeTypes
