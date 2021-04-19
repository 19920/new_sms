import {USER_LOGIN_REQUEST,USER_LOGIN_REQUEST_SUCCESS,USER_LOGIN_REQUEST_FAIL,USER_LOG_OUT,
    USER_REGISTER_REQUEST,USER_REGISTER_REQUEST_FAIL,USER_REGISTER_REQUEST_SUCCESS,
    USER_UPDATE_PROFILE_REQUEST,USER_UPDATE_PROFILE_REQUEST_FAIL,
    USER_UPDATE_PROFILE_REQUEST_RESET,
    USER_UPDATE_PROFILE_REQUEST_SUCCESS,
    USER_LIST_REQUEST,
    USER_LIST_REQUEST_SUCCESS,
    USER_LIST_REQUEST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_REQUEST_SUCCESS,
    USER_DELETE_REQUEST_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAIL,
    USER_UPDATE_RESET
} from '../constants/userTypes'
import {USER_DETAILS_REQUEST
    ,USER_DETAILS_REQUEST_SUCCESS,USER_DETAILS_REQUEST_FAIL,USER_DETAILS_RESET} from '../constants/getUserTypes'
const user={
    firstName:"John",
    lastName:"Kadahizi",
    schoolId:"12345",
    token:'sfdhasdkajsdlasklksaxjashask',
    role:'isSuperUser'
  }
  const initialState = {
    sidebarShow: 'responsive',
    
  }
  export const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
  }
export const userReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case USER_REGISTER_REQUEST:
      case USER_LOGIN_REQUEST:
          return { loading:true}
     case USER_REGISTER_REQUEST_SUCCESS:
      case USER_LOGIN_REQUEST_SUCCESS:
          return{loading:false,userInfo:payload}
          case USER_REGISTER_REQUEST_FAIL:
          case USER_LOGIN_REQUEST_FAIL:
            return{loading:false,error:payload}
      case USER_LOG_OUT:
          return{}
      default:
          return state;
  }
}

export const userDetailsReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case USER_DETAILS_REQUEST:
          return { loading:true}
     case USER_DETAILS_REQUEST_SUCCESS:
          return{loading:false,user:payload}
          case USER_DETAILS_REQUEST_FAIL:
            return{loading:false,error:payload}
            case USER_DETAILS_RESET:
            return{
                user:{}
            }
      default:
          return state;
  }
}

export const userUpdateprofileReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case USER_UPDATE_PROFILE_REQUEST:
          return { loading:true}
     case USER_UPDATE_PROFILE_REQUEST_SUCCESS:
          return{loading:false,success:true,userInfo:payload}
          case USER_UPDATE_PROFILE_REQUEST_FAIL:
            return{loading:false,error:payload}
            
      default:
          return state;
  }
}
export const usersListReducer=(state={users:[]},action)=>{
    const{type,payload} = action
  switch(type){
      case USER_LIST_REQUEST:
     
          return { loading:true}
     case USER_LIST_REQUEST_SUCCESS:
          return{loading:false,users:payload}
          case USER_LIST_REQUEST_FAIL:
            return{loading:false,error:payload}
            case USER_LIST_RESET:
                return{
                    users:[]
                }
      default:
          return state;
  }
}
export const userDeleteReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case USER_DELETE_REQUEST:
     
          return { loading:true}
     case USER_DELETE_REQUEST_SUCCESS:
          return{loading:false,success:true}
          case USER_DELETE_REQUEST_FAIL:
            return{loading:false,error:payload}
      default:
          return state;
  }
}
export const userUpdateByAdminReducer=(state={users:{}},action)=>{
    const{type,payload} = action
  switch(type){
      case USER_UPDATE_REQUEST:
          return { loading:true}
     case USER_UPDATE_REQUEST_SUCCESS:
          return{loading:false,success:true,users:payload}
          case USER_UPDATE_REQUEST_FAIL:
            return{loading:false,error:payload}
            case USER_UPDATE_RESET:
                return{users:{}}
      default:
          return state;
  }
}