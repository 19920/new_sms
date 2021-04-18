import React,{useState} from 'react'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const NewStudent = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [isBusCharge,setBusInCharge] = useState('')
    const [nameOfClasse,setClassName] = useState('')
    const [isnewuser,setNewUser] = useState('')
    const [isparentnewuser,setParentnewuser] = useState('')
    return (
        <>
        <Row>
        <Col xs={12} md={4} lg={4}>
                
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
           
            </Col>
        </Row>
        <h1 className="text-center">Add new Admission</h1>
        <hr></hr>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <h3>Personal Details:</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='email'>
                    <Form.Label style={{fontWeight:'bold'}}>Student Name:</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter student name" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label style={{fontWeight:'bold'}}>City:</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter student city" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='ID'>
                    <Form.Label style={{fontWeight:'bold'}}>ID Number:</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter student Number" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label style={{fontWeight:'bold'}}>Address</Form.Label>
                    <Form.Control  as ="textarea" rows={8} type="text" placeholder="Enter Address" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={3}>
            <Form.Group controlId='gender' style={{height:80}}>
            <Form.Label style={{fontWeight:'bold'}}>Gender</Form.Label>
         <Form.Check type="checkbox" 
         label="Male"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Female"
          value={gender} 
          checked={gender}
         onChange={(e)=>{
             setGender(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group>
     <Form.Group controlId='phone'>
                    <Form.Label style={{fontWeight:'bold'}}>Phone</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter phone" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='state'>
                    <Form.Label style={{fontWeight:'bold'}}>State:</Form.Label>
                    <Form.Control style={{height:50}}  type="text" placeholder="Enter state" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='photo'>
                    <Form.Label style={{fontWeight:'bold'}}>Upload ID Proof:</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='date'>
                    <Form.Label style={{fontWeight:'bold'}}>Date of Birth</Form.Label>
                    <Form.Control style={{height:50}} type="date" placeholder="Enter date of birth" value={password} onChange={(e)=>setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='blood'>
                    <Form.Label style={{fontWeight:'bold'}}>Blood Group</Form.Label>
                     <Form.Control as ="select"  style={{height:50}} value={nameOfClasse} onChange={(e)=>setClassName(e.target.value)}>
                     <option  value={'Select Blood Group'}>Select Blood Group</option>
                     <option  value={'A'}>A</option>
                     <option  value={'B'}>B</option>
                     <option  value={'AB'}>AB</option>
                     <option  value={'C'}>C</option>
                     <option  value={'CC'}>CC</option>
                                   </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label style={{fontWeight:'bold'}}>Email</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='Country'>
                    <Form.Label style={{fontWeight:'bold'}}>Country:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Enter Student Country" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='notes'>
                    <Form.Label style={{fontWeight:'bold'}}>Extra Notes/Detail</Form.Label>
                    <Form.Control  as ="textarea" rows={8} type="text" placeholder="Enter Address" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <h3>Admission Details:</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='date'>
                    <Form.Label style={{fontWeight:'bold'}}>Admission</Form.Label>
                    <Form.Control style={{height:50}} type="date" placeholder="Enter date of birth" value={password} onChange={(e)=>setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>
          

                <Form.Group controlId='salary'>
                    <Form.Label>Admission Number:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Admission Number" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
              
            </Col>
            <Col xs={12} md={4} lg={3}>
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
                <Form.Group controlId='Roll Number'>
                    <Form.Label>Roll Number:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Roll Number" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
    
            </Col>
            <Col xs={12} md={4} lg={4}>
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
                    <Form.Label style={{fontWeight:'bold'}}>Upload Photo:</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
            </Col>
        </Row>


<hr></hr>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <h3>Parent Details:</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='salary'>
                    <Form.Label>Father Name:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Father name" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
          

                <Form.Group controlId='salary'>
                    <Form.Label>Father Phone:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Father phone" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='photo'>
                    <Form.Label style={{fontWeight:'bold'}}>Upload Father ID :</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={3}>
            <Form.Group controlId='role'>
                    <Form.Label>Mother Name:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Mother name" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='salary'>
                    <Form.Label>Mother Phone:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Mother phone" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='photo'>
                    <Form.Label style={{fontWeight:'bold'}}>Upload Mother ID :</Form.Label>
                    <Form.Control style={{height:50}}  type="file" placeholder="Choose File" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
    
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='role'>
                    <Form.Label>Father Occupation:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Father occupation" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='salary'>
                    <Form.Label>Mother Occupation:</Form.Label>
                    <Form.Control style={{height:50}} type="text" placeholder="Mother occupation" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>

        <hr></hr>
       
        <Row>
        <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='login'>
            <h3>Student/Login Details</h3>
         <Form.Check type="checkbox" 
         label="Disallow Login?"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Existing user"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="New user"
          value={isnewuser} 
          checked={isnewuser}
         onChange={(e)=>{
             setNewUser(e.target.checked)
             
         }
         }>

         </Form.Check>
     </Form.Group>

                
            </Col>
            <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='login'>
            <h3>Status</h3>
         <Form.Check type="checkbox" 
         label="Active"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         <Form.Check type="checkbox" 
         label="Inactive"
          value={isBusCharge} 
          checked={isBusCharge}
         onChange={(e)=>{
             setBusInCharge(e.target.checked)
             
         }
         }>

         </Form.Check>
         
     </Form.Group>

                
            </Col>
            
            
        </Row>
        <hr></hr>
       
        
        {isnewuser&&<Row>
        <Col xs={12} md={4} lg={4}>
            <Form.Group controlId='username'>
                    <Form.Label><span className="text-danger">*</span>Username</Form.Label>
                    <Form.Control  
                     style={{height:50}} type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label><span className="text-danger">*</span>Login Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label><span className="text-danger">*</span>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={email} onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>}
       
    
        <hr></hr>
        <Row>
   
            <Col xs={12} md={12} lg={12}>
            <Button variant="success" style={{width:200,marginBottom:30,height:50}}>Save</Button>
            </Col>
            
        </Row>
        
        </>
    )
}

export default NewStudent
