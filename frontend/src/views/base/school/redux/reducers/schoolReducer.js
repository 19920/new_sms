import {SCHOOL_LIST_REQUEST,GET_ALL_SCHOOLS_SUCCESS,GET_ALL_SCHOOLS_FAIL, 
    SCHOOL_DELETE_REQUEST, SCHOOL_DELETE_REQUEST_SUCCESS, 
    SCHOOL_DELETE_REQUEST_FAIL, SCHOOL_CREATE_REQUEST, 
    SCHOOL_CREATE_REQUEST_RESET, SCHOOL_CREATE_REQUEST_SUCCESS, 
    SCHOOL_CREATE_REQUEST_FAIL, SCHOOL_UPDATE_REQUEST, 
    SCHOOL_UPDATE_REQUEST_SUCCESS, SCHOOL_UPDATE_REQUEST_FAIL, 
    SCHOOL_UPDATE_REQUEST_RESET, 
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
    ASSIGN_CLASS_TO_SCHOOL_REQUEST_FAIL
  } from '../constants/schoolTypes'
  export const schoolReducer=(state={schools:[]},action)=>{
      const{type,payload} = action
    switch(type){
        case SCHOOL_LIST_REQUEST:
            return { loading:true,schools:[]}
        case GET_ALL_SCHOOLS_SUCCESS:
            return{loading:false,schools:payload,pages:payload.pages,page:payload.page}
            case GET_ALL_SCHOOLS_FAIL:
              return{loading:false,error:payload}
        default:
            return state;
    }
  }
  export const schoolUsersReducer=(state={users:[]},action)=>{
    const{type,payload} = action
  switch(type){
      case GET_SCHOOL_USERS_REQUEST:
          return { loading:true,users:[]}
      case GET_SCHOOL_USERS_REQUEST_SUCCESS:
          return{loading:false,users:payload,pages:payload.pages,page:payload.page}
          case GET_SCHOOL_USERS_REQUEST_FAIL:
            return{loading:false,error:payload}
      default:
          return state;
  }
}
export const schoolClassesReducer=(state={classes:[]},action)=>{
  const{type,payload} = action
switch(type){
    case GET_SCHOOL_CLASSES_REQUEST:
        return { loading:true,users:[]}
    case GET_SCHOOL_CLASSES_REQUEST_SUCCESS:
        return{loading:false,classes:payload,pages:payload.pages,page:payload.page}
        case GET_SCHOOL_CLASSES_REQUEST_FAIL:
          return{loading:false,error:payload}
    default:
        return state;
}
}

  export const deleteschoolReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case SCHOOL_DELETE_REQUEST:
          return { loading:true,}
      case SCHOOL_DELETE_REQUEST_SUCCESS:
          return{loading:false,success:true}
          case SCHOOL_DELETE_REQUEST_FAIL:
            return{loading:false,error:payload}
      default:
          return state;
  }
  }
  
  export const createschoolReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case SCHOOL_CREATE_REQUEST:
          return { loading:true,}
      case SCHOOL_CREATE_REQUEST_SUCCESS:
          return{loading:false,success:true,school:payload}
          case SCHOOL_CREATE_REQUEST_FAIL:
            return{loading:false,error:payload}
            case SCHOOL_CREATE_REQUEST_RESET:
            return{}
      default:
          return state;
  }
  }
  
  export const updateschoolReducer=(state={school:{}},action)=>{
    const{type,payload} = action
  switch(type){
      case SCHOOL_UPDATE_REQUEST:
          return { loading:true,}
      case SCHOOL_UPDATE_REQUEST_SUCCESS:
          return{loading:false,success:true,school:payload}
          case SCHOOL_UPDATE_REQUEST_FAIL:
            return{loading:false,error:payload}
            case SCHOOL_UPDATE_REQUEST_RESET:
            return{school:{}}
      default:
          return state;
  }
  }
  export const assignUserToSchoolReducer=(state={},action)=>{
    const{type,payload} = action
  switch(type){
      case ASSIGN_USER_TO_SCHOOL_REQUEST:
          return { loading:true,}
     case ASSIGN_USER_TO_SCHOOL_REQUEST_SUCCESS:
          return{loading:false,success:true,assignedUser:payload}
          case ASSIGN_USER_TO_SCHOOL_REQUEST_FAIL:
            return{loading:false,error:payload,success:false}
      default:
          return state;
  }
}

export const assignClassToSchoolReducer=(state={},action)=>{
  const{type,payload} = action
switch(type){
    case ASSIGN_CLASS_TO_SCHOOL_REQUEST:
        return { loading:true,}
   case ASSIGN_CLASS_TO_SCHOOL_REQUEST_SUCCESS:
        return{loading:false,success:true,assignedClass:payload}
        case ASSIGN_CLASS_TO_SCHOOL_REQUEST_FAIL:
          return{loading:false,error:payload,success:false}
    default:
        return state;
}
}

//   export const addproductreviewReducer=(state={},action)=>{
//     const{type,payload} = action
//   switch(type){
//       case PRODUCT_ADD_REVIEW_REQUEST:
//           return { loading:true,}
//       case PRODUCT_ADD_REVIEW_REQUEST_SUCCESS:
//           return{loading:false,success:true}
//           case PRODUCT_ADD_REVIEW_REQUEST_FAIL:
//             return{loading:false,error:payload}
//             case PRODUCT_ADD_REVIEW_REQUEST_RESET:
//             return{}
//       default:
//           return state;
//   }
//   }
//   export const topproductsReducer=(state={products:[]},action)=>{
//     const{type,payload} = action
//   switch(type){
//       case TOP_PRODUCTS_REQUEST:
//           return { loading:true,products:[]}
//       case TOP_PRODUCTS_REQUEST_SUCCESS:
//           return{loading:false,products:payload}
//           case TOP_PRODUCTS_REQUEST_FAIL:
//             return{loading:false,error:payload}
           
//       default:
//           return state;
//   }
//   }
  
  