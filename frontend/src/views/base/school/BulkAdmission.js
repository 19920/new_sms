import React ,{useState}from 'react'
import {Form,Button,Table,Row,Col,Modal,Card,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const BulkAdmission = () => {
    const [nameOfClasse,setClassName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [isBusCharge,setBusInCharge] = useState('')
 
    const [isnewuser,setNewUser] = useState('')
    const [isparentnewuser,setParentnewuser] = useState('')
    return (
        <>
         <Row>
        <Col xs={12} md={4} lg={4}>
                <h3 className="text-success">Bulk Admission</h3>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='section'>
                    <Form.Label style={{fontWeight:'bold'}}>Current Session:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'2021'}>2021-2022</option>
                     <option  value={'2022'}>2022-2023</option>
                     <option  value={'2023'}>2023-2024</option>
                     
                    
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
                
            <LinkContainer to={`/students`}>
                            <Button variant="success" className="btn-sm mt-4 ml-5">
                            <i className="fas fa-edit"></i>
                           View Students
                            </Button>
                        </LinkContainer>
            </Col>
        </Row>
        <hr></hr>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <h3>Import Students From CSV File</h3>
                    <p>Select class and section,click "Export Sample CSV",fill student details in File,
                        choose the CSV file with student details and click "Bulk Import"
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={4} lg={4}>
                <Form.Group controlId='class'>
                    <Form.Label style={{fontWeight:'bold'}}>Class:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Class'}>Select Class</option>
                     <option  value={'4th'}>4th</option>
                     <option  value={'3rd'}>3rd</option>
                     <option  value={'2nd'}>2nd</option>
                     <option  value={'1st'}>1st</option>
                    
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col sm={12} md={4} lg={4}>
                <Form.Group controlId='section'>
                    <Form.Label style={{fontWeight:'bold'}}>Section:</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Section'}>Select Section</option>
                     <option  value={'MP'}>MP</option>
                     <option  value={'BC'}>BC</option>
                     <option  value={'ECO'}>ECO</option>
                     
                    
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='photo'>
                    <Form.Label style={{fontWeight:'bold'}}><span className="text-danger">*</span>CSV File:</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col sm={12} md={4} lg={4}>
                <h5 style={{fontWeight:'bold'}}>Export Sample CSV File:</h5>
                <div>
                <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="success" className="btn-sm">
                            <i className="fas fa-edit"></i>
                            Export Sample CSV
                            </Button>
                        </LinkContainer>
                </div>
               
   
                   
                </Col>
            </Row>
            <hr></hr>
            <Row>
            <Col xs={12} md={4} lg={4}>
               
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Button variant="primary" className="btn-sm">
                            <i className="fas fa-edit"></i>
                            Bulk Import
                            </Button>
            </Col>
            <Col xs={12} md={4} lg={4}>
              
            </Col>
            </Row>
        </>
    )
}

export default BulkAdmission
