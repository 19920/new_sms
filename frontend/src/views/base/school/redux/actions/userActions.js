import {USER_LOGIN_REQUEST,USER_LOGIN_REQUEST_SUCCESS,USER_LOGIN_REQUEST_FAIL,USER_LOG_OUT,
    USER_REGISTER_REQUEST,USER_REGISTER_REQUEST_FAIL,USER_REGISTER_REQUEST_SUCCESS, 
    USER_UPDATE_PROFILE_REQUEST_SUCCESS, USER_UPDATE_PROFILE_REQUEST_RESET, 
    USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_REQUEST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_REQUEST_SUCCESS,
    USER_LIST_REQUEST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_REQUEST_SUCCESS,
    USER_DELETE_REQUEST_FAIL,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_FAIL
} from '../constants/userTypes'
import {USER_DETAILS_REQUEST
    ,USER_DETAILS_REQUEST_SUCCESS,USER_DETAILS_REQUEST_FAIL,USER_DETAILS_RESET} from '../constants/getUserTypes'
import axios from 'axios';
export const login =(email,password)=>async(dispatch)=>{
    console.log("login",email,password)
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const  config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:13000/api/users/login',{email,password},config)
        console.log("Data after login",data)
        dispatch({
            type:USER_LOGIN_REQUEST_SUCCESS,
            payload:data.user
        })
        localStorage.setItem('userInfo',JSON.stringify(data.user))
    } catch (error) {
        console.log("error",error,
        error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        )
        dispatch({
            type:USER_LOGIN_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const register =(email,password,firstName,lastName)=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const  config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('/api/users/signin',{email,password,firstName,lastName},config)
        dispatch({
            type:USER_REGISTER_REQUEST_SUCCESS,
            payload:data.user
        })
        localStorage.setItem('userInfo',JSON.stringify(data.user))
    } catch (error) {
        dispatch({
            type:USER_REGISTER_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const getUserDetails =(id)=>async(dispatch,getState)=>{
    try {

        dispatch({
            type:USER_DETAILS_REQUEST
        })
        const {user:{userInfo}}= getState()
        console.log("user infoo in action",userInfo)
        const  config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/users/${id}`,config)
        console.log("data profile",data)
        dispatch({
            type:USER_DETAILS_REQUEST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:USER_DETAILS_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const updateUserProfile =(user)=>async(dispatch,getState)=>{
    try {

        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST
        })
        const {user:{userInfo}}= getState()
        console.log("user infoo in update action",userInfo)
        const  config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`/api/users/profile`,user,config)
        console.log("data profile",data)
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST_SUCCESS,
            payload:data.user
        })
        dispatch({
            type:USER_LOGIN_REQUEST_SUCCESS,
            payload:data.user
        })
        localStorage.setItem('userInfo',JSON.stringify(data.user))
    } catch (error) {
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const getUsersList =()=>async(dispatch,getState)=>{
    try {

        dispatch({
            type:USER_LIST_REQUEST
        })
        const {user:{userInfo}}= getState()
        console.log("user infoo in update action",userInfo)
        const  config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/users`,config)
        console.log("data profile",data)
        dispatch({
            type:USER_LIST_REQUEST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:USER_LIST_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const adminDeleteUser =(id)=>async(dispatch,getState)=>{
    try {

        dispatch({
            type:USER_DELETE_REQUEST
        })
        const {user:{userInfo}}= getState()
        console.log("user infoo in action",userInfo)
        const  config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.delete(`/api/users/${id}`,config)
        console.log("data profile",data)
        dispatch({
            type:USER_DELETE_REQUEST_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:USER_DELETE_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const adminUpdateUser =(user)=>async(dispatch,getState)=>{
    try {

        dispatch({
            type:USER_UPDATE_REQUEST
        })
        const {user:{userInfo}}= getState()
        console.log("user infoo in action",userInfo)
        const  config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`/api/users/${user._id}`,user,config)
        console.log("data profile",data)
        dispatch({
            type:USER_UPDATE_REQUEST_SUCCESS,
        })
        dispatch({
            type:USER_DETAILS_REQUEST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:USER_UPDATE_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}
export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('userInfo');
    dispatch({type:USER_LOG_OUT})
    dispatch({type:USER_DETAILS_RESET})
    dispatch({type:USER_LIST_RESET})
}