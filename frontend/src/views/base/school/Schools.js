import { CRow,CCol ,CInput,CForm, CButton} from '@coreui/react';
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CIcon from '@coreui/icons-react'
import { getSchool, getSchools } from './redux/actions/schoolActions';
const usersData=[
    {id:1,name:"IFAK",phone:'0730923388',email:"jkadahizi@gmail.com",address:"Kinshasa-Gombe",numberOfClasses:42,numberOfSections:2,numberOfTeachers:50,status:'Active'},
    {id:2,name:"La Colombiere",phone:'0730923388',email:"jkadahizi@gmail.com",address:"Kinshasa-Gombe",numberOfClasses:40,numberOfSections:6,numberOfTeachers:50,status:'Active'},
    {id:3,name:"Notre Dame de Citeaux",phone:'0730923388',email:"jkadahizi@gmail.com",address:"Kinshasa-Gombe",numberOfClasses:30,numberOfSections:0,numberOfTeachers:50,status:'Active'},
  
    
  ]
const Schools = ({history}) => {
 const dispatch=useDispatch()
 const schoolslist = useSelector(state=>state.schools)
 const {loading,error,schools} = schoolslist
 const loggedInuser = useSelector((state)=>state.user);
 const {userInfo} = loggedInuser
 useEffect(()=>{
   if(!userInfo){
       history.push("/login")
   }
   dispatch(getSchools())
 },[dispatch,userInfo])
 console.log("all schools",schools)
    return (
        <>
               <CRow>
            <CCol xs="12" md="12" lg="12">
            <LinkContainer to={`/schools/staff`}>
            <CButton type="button" size="sm" color="success"><CIcon name="cil-scrubber" /> Add new school</CButton>  
            </LinkContainer>
            </CCol>
        </CRow>
     {loading?<h3>Loading...</h3>:   <CRow>
        <CCol xs="12" lg="12">
    <h1 className="text-center pt-5">All Schools</h1>
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
   <CInput id="text-input" name="text-input" placeholder="Search school by name" />
    </CForm>
            <Table striped bordered hover responsive className="table-sm">
        <thead className="bg-info">
            <tr>
                <th>NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>NUMBER OF CLASSES</th>
                <th>NUMBER OF SECTIONS</th>
                <th>NUMBER OF EMPLOYEES</th>
                <th>NUMBER OF STUDENTS</th>
                <th>ADMINS</th>
                <th>CATEGORY</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
        {schools&&schools.map(product=>(
        <tr key={product.id}>
                    
                    <td>{product.name}</td>
                    <td>{product.phonenumber}</td>
                    <td>{product.email}</td>
                    <td>{product.address}</td>
                    <td>{product.numberOfClasses}</td>
                    <td>{product.numberOfSections}</td>
                    <td>{product.numberOfemployees}</td>
                    <td>{product.numberOfStudents}</td>
                    

                    <td>
                    <LinkContainer to={`/school/${product._id}/assign-user`}>
                           <a className="btn-sm text-success text-right">Assign admins</a>
                        </LinkContainer>
                    </td>
                    <td>{product.category}</td>

                    <td>
                    <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="success" className="btn-sm m-1">
                            <i className="fas fa-edit"></i>
                            View
                            </Button>
                        </LinkContainer>
                        <LinkContainer to={`/admin/products/${"product._id"}/edit`}>
                            <Button variant="warning" className="btn-sm">
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
        </CRow>}
            
        </>
    )
}

export default Schools
