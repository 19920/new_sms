
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer,changeState } from './views/base/school/redux/reducers/userReducer';


const userInfoInStorage= localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null




const reducer=combineReducers({
  changeState:changeState,
  user:userReducer
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