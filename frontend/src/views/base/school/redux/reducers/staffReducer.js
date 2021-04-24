import { ASSIGN_STAFF_TO_SCHOOL_REQUEST, ASSIGN_STAFF_TO_SCHOOL_REQUEST_FAIL, ASSIGN_STAFF_TO_SCHOOL_REQUEST_SUCCESS, 
    GET_SCHOOL_STAFFS_REQUEST, GET_SCHOOL_STAFFS_REQUEST_FAIL, 
    GET_SCHOOL_STAFFS_REQUEST_SUCCESS } from "../constants/getStaffTypes"

export const staffReducer=(state={staffs:[]},action)=>{
    const{type,payload} = action
  switch(type){
      case GET_SCHOOL_STAFFS_REQUEST:
          return { loading:true,staffs:[]}
      case GET_SCHOOL_STAFFS_REQUEST_SUCCESS:
          return{loading:false,staffs:payload,pages:payload.pages,page:payload.page}
          case GET_SCHOOL_STAFFS_REQUEST_FAIL:
            return{loading:false,error:payload}
      default:
          return state;
  }
}
export const assignStaffToSchoolReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case ASSIGN_STAFF_TO_SCHOOL_REQUEST:
          return { loading:true,}
     case ASSIGN_STAFF_TO_SCHOOL_REQUEST_SUCCESS:
          return{loading:false,success:true,assignedUser:payload}
          case ASSIGN_STAFF_TO_SCHOOL_REQUEST_FAIL:
            return{loading:false,error:payload,success:false}
      default:
          return state;
  }
}