import React,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Login from 'src/views/base/school/auth/Login'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
  TheSideBarAuth,
  TheHeaderAuth
} from './index'

const TheLayout = () => {
  const dispatch = useDispatch()
  const loggedInuser = useSelector(state=>state.user);
  const {loading,error,userInfo} = loggedInuser
  useEffect(()=>{
    if(userInfo){
       dispatch({
           type:"USER_LOGIN_REQUEST_SUCCESS",
           payload:userInfo
       })
    }
},[userInfo])
  console.log("userInfo from TheLayout",userInfo)
  return (
    userInfo?<div className="c-app c-default-layout">
    <TheSidebar user ={userInfo}/>
     <div className="c-wrapper">
       <TheHeader/>
       <div className="c-body">
         <TheContent user={userInfo}/>
       </div>
       <TheFooter/>
     </div>
   </div>
 
      :
      <Redirect to={'/login'} />
      )
    
}

export default TheLayout
