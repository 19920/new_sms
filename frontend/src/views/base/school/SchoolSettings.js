
import {
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader,
    CButton
  } from '@coreui/react'
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const SchoolSettings = () => {
    const[title,setTitle] = useState("")
const[description,setDescription] = useState("")
const[url,setUrl] = useState("")
const[file,setFile] = useState("")
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [isViewAttendance,setViewAttendance] =useState(true)
const [isTakeAttendance,setNewAttendance] = useState(false)
const [gender,setGender] = useState('')
const[showForm,setShoForm] = useState(false)
const [isBusCharge,setBusInCharge] = useState('')
const [nameOfClasse,setClassName] = useState('')
const [isnewuser,setNewUser] = useState('')
const [isparentnewuser,setParentnewuser] = useState('')
const [active, setActive] = useState(1)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    return (
        <>
        {/* <Row>
            <Col sm={12} md={12} lg={12}>
            <Button variant="success" style={{width:200,marginBottom:30,height:50}}>General</Button>
            <Button variant="warning" style={{width:200,marginBottom:30,height:50}}>Email carier</Button>
            <Button variant="primary" style={{width:200,marginBottom:30,height:50}}>Email templates</Button>
            <Button variant="info" style={{width:200,marginBottom:30,height:50}}>Notifications carier</Button>
            <Button variant="info" style={{width:200,marginBottom:30,height:50}}>Notifications templates</Button>
            <Button variant="warning" style={{width:200,marginBottom:30,height:50}}>Payment Methods</Button>
            <Button variant="primary" style={{width:200,marginBottom:30,height:50}}>Zooom-Live Classes</Button>
           
            </Col>
        </Row>
          <Row>
          <Col xs={12} md={8} lg={8}>
          <Form.Group controlId='session'>
                    <Form.Label style={{fontWeight:'bold'}}>Set Active Session</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'2021-2022'}>2021-2022</option>
                     <option  value={'2022-2021'}>2022-2023</option>
                   
                                   </Form.Control>
                </Form.Group>


                <Form.Group controlId='format'>
                    <Form.Label style={{fontWeight:'bold'}}>Set date format</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'dd-mm-yyyy'}>dd-mm-yyyy</option>
                     <option  value={'dd/mm/yyyy'}>dd/mm/yyyy</option>
                   
                                   </Form.Control>
                </Form.Group>
                <Form.Group controlId='format'>
                    <Form.Label style={{fontWeight:'bold'}}>Set Currency </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'USD'}>USD</option>
                     <option  value={'SKR'}>SKR</option>
                   
                                   </Form.Control>
                </Form.Group>
              
                <Form.Group controlId='photo'>
                    <Form.Label style={{fontWeight:'bold'}}>Upload School Logo :</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
               
            </Col>
          </Row>   */}

<CRow>
      <CCol xs="12" md="12" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
           School Settings
            <DocsLink name="CTabs"/>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    General
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  Email carier
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  Email templates
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  Notifications carier
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  Notifications templates
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  Payment Methods
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  Zooom-Live Classes
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                <Col xs={12} md={12} lg={12}>
          <Form.Group controlId='session'>
                    <Form.Label style={{fontWeight:'bold'}}>Set Active Session</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'2021-2022'}>2021-2022</option>
                     <option  value={'2022-2021'}>2022-2023</option>
                   
                                   </Form.Control>
                </Form.Group>


                <Form.Group controlId='format'>
                    <Form.Label style={{fontWeight:'bold'}}>Set date format</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'dd-mm-yyyy'}>dd-mm-yyyy</option>
                     <option  value={'dd/mm/yyyy'}>dd/mm/yyyy</option>
                   
                                   </Form.Control>
                </Form.Group>
                <Form.Group controlId='format'>
                    <Form.Label style={{fontWeight:'bold'}}>Set Currency </Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'USD'}>USD</option>
                     <option  value={'SKR'}>SKR</option>
                   
                                   </Form.Control>
                </Form.Group>
              
                <Form.Group controlId='photo'>
                    <Form.Label style={{fontWeight:'bold'}}>Upload School Logo :</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
               
            </Col>
                </CTabPane>
                <CTabPane>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`3. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                    <CRow>
                    <Col sm="6" md="6" lg="6">
                <Form.Group controlId='salary'>
                    <Form.Label>Zoom API Key:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Zoom API Key(JWT)" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='salary'>
                    <Form.Label>Zoom API Secret:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Zoom API Secret(JWT)" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col sm="6" md="6" lg="6">
                  <h3>Accessing your Zoom API Key & Secret</h3>
                  <p>To access the API Key and secret create JWT app on the marketplace.After providing basic information about your app,
                      locate your API Key and Secret in the App credentilas page
                      <a>clik here for more information</a>
                  </p>
                </Col>
                <hr></hr>
        
            <Col xs={12} md={12} lg={12}>
            <Button variant="success" style={{width:200,marginBottom:30,height:50}}>Save</Button>
            </Col>
            
    
                    </CRow>
                
                
                </CTabPane>
                
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
     
     
      
    </CRow>
        </>
    )
}

export default SchoolSettings
