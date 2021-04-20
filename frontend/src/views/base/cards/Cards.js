
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Table,Row,Col,Modal} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { getSchool, getSchools } from '../school/redux/actions/schoolActions';

const Cards = ({history}) => {
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
    {loading?<h3>Loading...</h3>:
     <CRow>
     {schools?schools.map(school=>(
     <CCol xs="12" sm="6" md="4">
       <CCard>
         <CCardHeader style={{backgroundColor:'green',color:'white'}}>
           {school.name}
           <DocsLink name="CCard"/>
         </CCardHeader>
         <CCardBody style={{backgroundColor:'grey'}}>
          <p className="text-white">Phone:{school.phonenumber}</p>
          <p className="text-white">Total Classes:{school.numberOfClasses}</p>
          <p className="text-white">Category:{school.category}</p>
         </CCardBody>
         <CCardFooter style={{backgroundColor:'blue',color:'white'}}>View</CCardFooter>
       </CCard>
     </CCol>
    
  
   )):
   <CCol xs="12" sm="6" md="4">
   <CCard>
     <CCardHeader style={{backgroundColor:'green',color:'white'}}>
       {'You dont have any school '}
       <DocsLink name="CCard"/>
     </CCardHeader>
     
    
   </CCard>
 </CCol>
   }
    </CRow>
          }
      
       
    </>
  )
}

export default Cards
