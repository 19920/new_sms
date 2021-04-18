import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
const usersData=[]
    // {id:1,title:"MAths",description:"3rd",addedBy:'Kadahizi',date:"2021-04-20",class:"4th"},
    // {id:2,title:"Physics",description:"3rd",addedBy:'John',date:"2021-04-20",class:"3rd"},
    
  
  
    
  

const LiveClass = () => {
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
    return (
        <>
        <hr></hr>

        
          {usersData.length<=0?
                  <>
                  <Row>
                  <Col xs={12} md={4} lg={4}>
                  <LinkContainer to={`/school/new-class-notice`}>
                                      <Button variant="success" className="btn-sm text-white">
                                      <i className="fas fa-edit"></i>
                                      Add new Live Class
                                      </Button>
                                      </LinkContainer>
                      </Col>
                      <Col xs={12} md={4} lg={4}>
                      <Form.Group controlId='section'>
                              <Form.Label style={{fontWeight:'bold'}}>Current Session:</Form.Label>
                               <Form.Control as ="select"  style={{height:50}} value={description} onChange={(e)=>setDescription(e.target.value)}>
                               <option  value={'2021'}>2021-2022</option>
                               <option  value={'2022'}>2022-2023</option>
                               <option  value={'2023'}>2023-2024</option>
                               
                              
                              </Form.Control>
                          </Form.Group>
                      </Col>
                      <Col xs={12} md={4} lg={4}>
                     
                      </Col>
                  </Row>
                  <hr></hr>
                <Row className="bg-info text-center">
          
                  <Col xs={12} md={12} lg={12}>
                 
          
                  </Col>
          
          
          </Row>
          <Row>
              <Col sm={12} md={12} lg={12}>
              
              <h4 className="text-info text-center">Live Classes</h4>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
             <CInput id="text-input" name="text-input" placeholder="Search student by name" />
              </CForm>
              <Table striped bordered hover responsive className="table-sm">
                  <thead className="bg-info">
                      <tr>
                          <th>Topic</th>
                          <th>Host ID</th>
                          <th>Duration(minutes)</th>
                          <th>Meeting ID(Zoom)</th>
                          <th>Start Class</th>
                          <th>Start Date/Time</th>
                          <th>Type</th>
                          <th>Join URL</th>
                          <th>Class</th>
                          <th>Subject</th>
                          <th>Teacher</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                  {/* {usersData&&usersData.map(product=>(
                  <tr key={product.id}>
                              <td>{product.notice}</td>
                              <td>{product.class}</td>
                              <td>{product.link}</td>
                              <td>{product.date}</td>
                              <td>{product.addedBy}</td>
                             
                              <td><LinkContainer to={`/school/student-leaves/id`}>
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
            } */}
                  </tbody>
            
              </Table>
              </Col>
          
          </Row>
                  </>
          :
          <Row>
              <Col ms={12} md={12} lg={12}>
                  <p style={{
                      fontWeight:'bold',
                      fontSize:20
                  }}>Please  configure your Zoom Api keys in School Setting if you are admin,otherise contact your administrator</p>
              </Col>
          </Row>
          }
        </>
    )
}

export default LiveClass
