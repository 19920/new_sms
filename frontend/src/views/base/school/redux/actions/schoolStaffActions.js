import React from 'react';
import axios from 'axios'
import {setAlert} from './alertActions'
import { ASSIGN_STAFF_TO_SCHOOL_REQUEST, ASSIGN_STAFF_TO_SCHOOL_REQUEST_FAIL, ASSIGN_STAFF_TO_SCHOOL_REQUEST_SUCCESS, 
    GET_SCHOOL_STAFFS_REQUEST, GET_SCHOOL_STAFFS_REQUEST_FAIL, 
    GET_SCHOOL_STAFFS_REQUEST_SUCCESS } from "../constants/getStaffTypes"
export const getSchoolStaffs=(keyword="",pageNumber="")=>async(dispatch,getState)=>{
    try {
        const {user:{userInfo}}= getState()
        console.log("getSchools staffs  actions",userInfo)
        const  config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        dispatch({type:GET_SCHOOL_STAFFS_REQUEST});
        const {data} = await axios.get(`http://localhost:13000/api/staffs?keyword=${keyword}&pageNumber=${pageNumber}`,config)
        console.log("data of all schools",data)
        dispatch({
            type:GET_SCHOOL_STAFFS_REQUEST_SUCCESS,
            payload:data.staffs
        })
    } catch (error) {
        console.log("error get staffs",JSON.stringify(error.response))
        dispatch({
            type:GET_SCHOOL_STAFFS_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
    }

    export const addStaffToSchool =(staff)=>async(dispatch,getState)=>{
        try {
            dispatch({
                type:ASSIGN_STAFF_TO_SCHOOL_REQUEST
            })
            const {user:{userInfo}}= getState()
            const  config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
            const {data} = await axios.post(`http://localhost:13000/api/staffs`,staff,config)
            dispatch({
                type:ASSIGN_STAFF_TO_SCHOOL_REQUEST_SUCCESS,
                payload:data.user
            })
            dispatch(setAlert('School created', 'success'))
        } catch (error) {
            dispatch({
                type:ASSIGN_STAFF_TO_SCHOOL_REQUEST_FAIL,
                payload:error.response&&error.response.data.message
                ?error.response.data.message
                :error.message
            })
            dispatch(setAlert(error.message, 'danger'))
        }
    }