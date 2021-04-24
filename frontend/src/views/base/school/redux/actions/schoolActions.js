import {SCHOOL_LIST_REQUEST,
    GET_ALL_SCHOOLS_SUCCESS,
    GET_ALL_SCHOOLS_FAIL, 
    SCHOOL_DETAILS_REQUEST, 
    GET_SCHOOL_DETAILS_SUCCESS, 
    GET_SCHOOL_DETAILS_FAIL, 
    SCHOOL_DELETE_REQUEST, 
    SCHOOL_DELETE_REQUEST_SUCCESS, 
    SCHOOL_DELETE_REQUEST_FAIL, 
    SCHOOL_CREATE_REQUEST, 
    SCHOOL_CREATE_REQUEST_RESET,
    SCHOOL_CREATE_REQUEST_SUCCESS, 
    SCHOOL_CREATE_REQUEST_FAIL,
    SCHOOL_UPDATE_REQUEST,
    SCHOOL_UPDATE_REQUEST_SUCCESS,
    SCHOOL_UPDATE_REQUEST_FAIL,

    SCHOOL_ADD_REVIEW_REQUEST, 
    SCHOOL_ADD_REVIEW_REQUEST_FAIL, 
    SCHOOL_ADD_REVIEW_REQUEST_RESET,
    SCHOOL_ADD_REVIEW_REQUEST_SUCCESS,
    TOP_SCHOOLS_REQUEST,
    TOP_SCHOOLS_REQUEST_SUCCESS,
    TOP_SCHOOLS_REQUEST_FAIL,
    GET_SCHOOL_USERS_REQUEST,
    GET_SCHOOL_USERS_REQUEST_SUCCESS,
    GET_SCHOOL_USERS_REQUEST_FAIL,
    ASSIGN_USER_TO_SCHOOL_REQUEST,
    ASSIGN_USER_TO_SCHOOL_REQUEST_SUCCESS,
    ASSIGN_USER_TO_SCHOOL_REQUEST_FAIL,
    GET_SCHOOL_CLASSES_REQUEST,
    GET_SCHOOL_CLASSES_REQUEST_SUCCESS,
    GET_SCHOOL_CLASSES_REQUEST_FAIL,
    ASSIGN_CLASS_TO_SCHOOL_REQUEST,
    ASSIGN_CLASS_TO_SCHOOL_REQUEST_SUCCESS,
    ASSIGN_CLASS_TO_SCHOOL_REQUEST_FAIL,
    GET_SCHOOL_TEACHERS_REQUEST,
    GET_SCHOOL_TEACHERS_REQUEST_SUCCESS,
    GET_SCHOOL_TEACHERS_REQUEST_FAIL,
    ASSIGN_SUBJECT_TO_SCHOOL_REQUEST_SUCCESS,
    ASSIGN_SUBJECT_TO_SCHOOL_REQUEST_FAIL,
    GET_SCHOOL_SUBJECTS_REQUEST,
    GET_SCHOOL_SUBJECTS_REQUEST_SUCCESS,
    GET_SCHOOL_SUBJECTS_REQUEST_FAIL,
    ASSIGN_SUBJECT_TO_SCHOOL_REQUEST
} from '../constants/schoolTypes'
import axios from 'axios';
import { setAlert } from './alertActions';

export const getSchools=(keyword="",pageNumber="")=>async(dispatch,getState)=>{
try {
    const {user:{userInfo}}= getState()
    console.log("getSchools in getSchools actions",userInfo)
    const  config={
        headers:{
            Authorization:`Bearer ${userInfo.token}`
        }
    }
    dispatch({type:SCHOOL_LIST_REQUEST});
    const {data} = await axios.get(`http://localhost:13000/api/schools?keyword=${keyword}&pageNumber=${pageNumber}`,config)
    console.log("data of all schools",data)
    dispatch({
        type:GET_ALL_SCHOOLS_SUCCESS,
        payload:data.Schools
    })
} catch (error) {
    console.log("error get schools",JSON.stringify(error.response))
    dispatch({
        type:GET_ALL_SCHOOLS_FAIL,
        payload:error.response&&error.response.data.message
        ?error.response.data.message
        :error.message
    })
}
}
export const gettopSchools=()=>async(dispatch)=>{
    try {
        dispatch({type:TOP_SCHOOLS_REQUEST});
        const {data} = await axios.get(`/api/schools/top-schools`)
        dispatch({
            type:TOP_SCHOOLS_REQUEST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:TOP_SCHOOLS_REQUEST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
    }
    export const getSchoolsUsers=(id)=>async(dispatch,getState)=>{
        try {
            const {user:{userInfo}}= getState()
            // console.log("getSchools in getSchools actions",userInfo)
            const  config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
            dispatch({type:GET_SCHOOL_USERS_REQUEST});
            const {data} = await axios.get(`http://localhost:13000/api/schools/${id}/users`,config)
            console.log("school users",data)
            dispatch({
                type:GET_SCHOOL_USERS_REQUEST_SUCCESS,
                payload:data.users
            })
        } catch (error) {
            dispatch({
                type:GET_SCHOOL_USERS_REQUEST_FAIL,
                payload:error.response&&error.response.data.message
                ?error.response.data.message
                :error.message
            })
        }
        }
        export const getSchoolsTeachers=(id)=>async(dispatch,getState)=>{
            try {
                const {user:{userInfo}}= getState()
                // console.log("getSchools in getSchools actions",userInfo)
                const  config={
                    headers:{
                        Authorization:`Bearer ${userInfo.token}`
                    }
                }
                dispatch({type:GET_SCHOOL_TEACHERS_REQUEST});
                const {data} = await axios.get(`http://localhost:13000/api/schools/${id}/teachers`,config)
                console.log("school teachers",data)
                dispatch({
                    type:GET_SCHOOL_TEACHERS_REQUEST_SUCCESS,
                    payload:data.users
                })
            } catch (error) {
                dispatch({
                    type:GET_SCHOOL_TEACHERS_REQUEST_FAIL,
                    payload:error.response&&error.response.data.message
                    ?error.response.data.message
                    :error.message
                })
            }
            }
        export const getSchoolsClasses=(id)=>async(dispatch,getState)=>{
            try {
                const {user:{userInfo}}= getState()
                // console.log("getSchools in getSchools actions",userInfo)
                const  config={
                    headers:{
                        Authorization:`Bearer ${userInfo.token}`
                    }
                }
                dispatch({type:GET_SCHOOL_CLASSES_REQUEST});
                const {data} = await axios.get(`http://localhost:13000/api/schools/${id}/classes`,config)
                console.log("school users",data)
                dispatch({
                    type:GET_SCHOOL_CLASSES_REQUEST_SUCCESS,
                    payload:data.classes
                })
            } catch (error) {
                dispatch({
                    type:GET_SCHOOL_CLASSES_REQUEST_FAIL,
                    payload:error.response&&error.response.data.message
                    ?error.response.data.message
                    :error.message
                })
            }
            }
            export const getSchoolsSubjects=(id)=>async(dispatch,getState)=>{
                try {
                    console.log("school subjcets   ",id)
                    const {user:{userInfo}}= getState()
                    // console.log("getSchools in getSchools actions",userInfo)
                    const  config={
                        headers:{
                            Authorization:`Bearer ${userInfo.token}`
                        }
                    }
                    dispatch({type:GET_SCHOOL_SUBJECTS_REQUEST});
                    const {data} = await axios.get(`http://localhost:13000/api/schools/${id}/subjects`,config)
                    console.log("school subjcets ",data)
                    dispatch({
                        type:GET_SCHOOL_SUBJECTS_REQUEST_SUCCESS,
                        payload:data.subjects
                    })
                } catch (error) {
                    dispatch({
                        type:GET_SCHOOL_SUBJECTS_REQUEST_FAIL,
                        payload:error.response&&error.response.data.message
                        ?error.response.data.message
                        :error.message
                    })
                }
                }
export const getSchool=(id)=>async(dispatch)=>{
    try {
        dispatch({type:SCHOOL_DETAILS_REQUEST});
        const {data} = await axios.get(`/api/schools/${id}`)
        console.log("data from getSCHOOL",data)
        dispatch({
            type:GET_SCHOOL_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:GET_SCHOOL_DETAILS_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
    }
    export const adminDeleteSchool=(id)=>async(dispatch,getState)=>{
        try {
            const {user:{userInfo}}= getState()
        console.log("user infoo in action",userInfo)
        const  config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
            dispatch({type:SCHOOL_DELETE_REQUEST});
            await axios.delete(`/api/schools/${id}`,config)
            console.log("from admin delte in action",id)
            dispatch({
                type:SCHOOL_DELETE_REQUEST_SUCCESS,
            })
        } catch (error) {
            dispatch({
                type:SCHOOL_DELETE_REQUEST_FAIL,
                payload:error.response&&error.response.data.message
                ?error.response.data.message
                :error.message
            })
        }
        }

        export const adminCreateSchool=(school)=>async(dispatch,getState)=>{
            console.log("sent school data",school)
            try {
                const {user:{userInfo}}= getState()
            console.log("user infoo in action",userInfo)
            const  config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
                dispatch({type:SCHOOL_CREATE_REQUEST});
            await axios.post(`http://localhost:13000/api/schools`,school,config)
            console.log("data after create school")
                dispatch({
                    type:SCHOOL_CREATE_REQUEST_SUCCESS,
                })
            } catch (error) {
                console.log("some error in creating",JSON.stringify(error))
                dispatch({
                    type:SCHOOL_CREATE_REQUEST_FAIL,
                    payload:error.response&&error.response.data.message
                    ?error.response.data.message
                    :error.message
                })
            }
            }
            export const adminUpdateSchool=(school)=>async(dispatch,getState)=>{
                try {
                    const {user:{userInfo}}= getState()
                console.log("user infoo in action",userInfo)
                const  config={
                    headers:{
                        Authorization:`Bearer ${userInfo.token}`
                    }
                }
                    dispatch({type:SCHOOL_UPDATE_REQUEST});
                    const {data}=await axios.put(`/api/SCHOOLs/${school._id}`,school,config)
                    dispatch({
                        type:SCHOOL_UPDATE_REQUEST_SUCCESS,
                        payload:data
                    })
                } catch (error) {
                    dispatch({
                        type:SCHOOL_UPDATE_REQUEST_FAIL,
                        payload:error.message
                    })
                }
                }

                export const addSchoolReview=(schoolId,review)=>async(dispatch,getState)=>{
                    try {
                        const {user:{userInfo}}= getState()
                    console.log("user infoo in action",userInfo)
                    const  config={
                        headers:{
                            Authorization:`Bearer ${userInfo.token}`
                        }
                    }
                        dispatch({type:SCHOOL_ADD_REVIEW_REQUEST});
                       await  axios.post(`/api/SCHOOLs/${schoolId}/reviews`,review,config)
                        dispatch({
                            type:SCHOOL_ADD_REVIEW_REQUEST_SUCCESS,
                            
                        })
                    } catch (error) {
                        dispatch({
                            type:SCHOOL_ADD_REVIEW_REQUEST_FAIL,
                            payload:error.response&&error.response.data.message
                            ?error.response.data.message
                            :error.message
                        })
                    }
                    }
                    export const assignUserToSchool =(id,email,password,firstName,lastName,role)=>async(dispatch,getState)=>{
                        try {
                            dispatch({
                                type:ASSIGN_USER_TO_SCHOOL_REQUEST
                            })
                            const {user:{userInfo}}= getState()
                            const  config={
                                headers:{
                                    Authorization:`Bearer ${userInfo.token}`
                                }
                            }
                            const {data} = await axios.post(`http://localhost:13000/api/schools/${id}/assign-user`,{email,password,firstName,lastName,role},config)
                            dispatch({
                                type:ASSIGN_USER_TO_SCHOOL_REQUEST_SUCCESS,
                                payload:data.user
                            })
                        } catch (error) {
                            dispatch({
                                type:ASSIGN_USER_TO_SCHOOL_REQUEST_FAIL,
                                payload:error.response&&error.response.data.message
                                ?error.response.data.message
                                :error.message
                            })
                        }
                    }

                    export const assignClassToSchool =(name,description,section,numberOfStudents)=>async(dispatch,getState)=>{
                        try {
                            dispatch({
                                type:ASSIGN_CLASS_TO_SCHOOL_REQUEST
                            })
                            const {user:{userInfo}}= getState()
                            const  config={
                                headers:{
                                    Authorization:`Bearer ${userInfo.token}`
                                }
                            }
                            const {data} = await axios.post(`http://localhost:13000/api/schools/add-class`,{name,description,section,numberOfStudents},config)
                            dispatch({
                                type:ASSIGN_CLASS_TO_SCHOOL_REQUEST_SUCCESS,
                                payload:data.user
                            })
                        } catch (error) {
                            dispatch({
                                type:ASSIGN_CLASS_TO_SCHOOL_REQUEST_FAIL,
                                payload:error.response&&error.response.data.message
                                ?error.response.data.message
                                :error.message
                            })
                        }
                    }
                    export const assignSubjectToSchool =(subject)=>async(dispatch,getState)=>{
                        console.log("subject",subject)
                        try {
                            dispatch({
                                type:ASSIGN_SUBJECT_TO_SCHOOL_REQUEST
                            })
                            const {user:{userInfo}}= getState()
                            const  config={
                                headers:{
                                    Authorization:`Bearer ${userInfo.token}`
                                }
                            }
                            console.log("userInfo in assgn subject",userInfo)
                            const {data} = await axios.post(`http://localhost:13000/api/schools/add-subject`,subject,config)
                            dispatch({
                                type:ASSIGN_SUBJECT_TO_SCHOOL_REQUEST_SUCCESS,
                                payload:data.user
                            })
                           dispatch(setAlert("Subject created successfull",'success'))
                        } catch (error) {
                            console.log("error",error.message)
                            dispatch(setAlert( `${error.message}`,'danger'))
                            dispatch({
                                type:ASSIGN_SUBJECT_TO_SCHOOL_REQUEST_FAIL,
                                payload:error.response&&error.response.data.message
                                ?error.response.data.message
                                :error.message
                            })
                        }
                    }