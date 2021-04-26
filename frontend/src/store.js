
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer,changeState } from './views/base/school/redux/reducers/userReducer';
import {schoolReducer,createschoolReducer,deleteschoolReducer,updateschoolReducer,
  schoolUsersReducer,
  assignUserToSchoolReducer,
  schoolClassesReducer,
  assignClassToSchoolReducer,
  schoolTeachersReducer,
  schoolSubjectsReducer,
  assignSubjectToSchoolReducer,
  schoolSectionsReducer,
  assignSectionToSchoolReducer,
  
} from './views/base/school/redux/reducers/schoolReducer'
import {staffReducer,assignStaffToSchoolReducer} from  './views/base/school/redux/reducers/staffReducer'
import {alertReducer} from './views/base/school/redux/reducers/alert'




const userInfoInStorage= localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null




const reducer=combineReducers({
  sidebarShow:changeState,
  user:userReducer,
  staff:staffReducer,
  alertReducer:alertReducer,

  schoolUsers:schoolUsersReducer,
  schoolTeachers:schoolTeachersReducer,
  schoolSubjects:schoolSubjectsReducer,
  schoolSections:schoolSectionsReducer,
  classeReducer:schoolClassesReducer,

 
  assignedSectionsInfo:assignSectionToSchoolReducer,
  assignedUserInfo:assignUserToSchoolReducer,
  assignedStaffInfo:assignStaffToSchoolReducer,
  schools:schoolReducer,

  
  assignedClassInfo:assignClassToSchoolReducer,
  assignedSubjectInfo:assignSubjectToSchoolReducer,


  createschoolReducer:createschoolReducer,
  deleteschoolReducer:deleteschoolReducer,


  updateschoolReducer:updateschoolReducer

})
const initialState = {
  user:{userInfo:userInfoInStorage},
}
// {
//   firstName:"John",
//   lastName:"Kadahizi",
//   schoolId:"12345",
//   token:'sfdhasdkajsdlasklksaxjashask',
//   role:'isSuperUser'

// }
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store