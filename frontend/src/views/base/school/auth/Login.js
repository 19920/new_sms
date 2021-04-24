import React,{useState,useEffect, Fragment} from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import './Login.css';
import {useDispatch,useSelector} from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { login } from '../redux/actions/userActions'

// const Login3 = ({history}) => {
//     const [email,setEmail] = useState('dkadahizi@gmail.com')
//     const [password,setPassword] = useState('Kadahizi1992')
//     const [loginError,setLoginError] = useState('')
//   const dispatch = useDispatch()
// const loggedInuser = useSelector(state=>state.user);
// const {loading,error,userInfo} = loggedInuser

// useEffect(()=>{
//     if(userInfo){
//         history.push('/')
//     }
//     if(error){
//       setLoginError('Invalid creditials')
//     }
// },[userInfo,error])


//     const onSubmitHandler=(e)=>{
//       e.preventDefault()
//       console.log("onsubmit clicked")
//       dispatch(login(email,password))
//       history.push('/')

//     }
//   return (
//     <div className="c-app c-default-layout flex-row align-items-center bg-dark">
//       <CContainer>
//        {loading?<h2 className="text-small">Loading.....</h2>: <CRow className="justify-content-center">
//           <CCol sm="12" md="9" lg="9">
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   {loginError&&<h2 className="text-small text-danger">{loginError}</h2>}
//                 <h2 className="text-small">Welcome To School managment system(SMS)</h2>
//                   <CForm>
//                     <h3>Login</h3>
//                     <p className="text-muted">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput type="text" placeholder="Email" autoComplete="username" value={email} 
//                       onChange={(e)=>{
//                         setEmail(e.target.value)
//                         setLoginError('')
//                       }} />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput type="password" placeholder="Password" autoComplete="current-password" value={password} 
//                       onChange={(e)=>{
//                         setPassword(e.target.value)
//                         setLoginError('')
//                       }} />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs="6">
//                         <CButton color="primary" className="px-4" onClick={onSubmitHandler}>Login</CButton>
//                       </CCol>
//                       <CCol xs="6" className="text-right">
//                         <CButton color="link" className="px-0">Forgot password?</CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                       labore et dolore magna aliqua.</p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard> */}
//             </CCardGroup>
//           </CCol>
//         </CRow>}
//       </CContainer>
//     </div>
//   )
// }

// export default Login

const Login = ({history}) => {
  const [email,setEmail] = useState('dkadahizi@gmail.com')
    const [password,setPassword] = useState('Kadahizi1992')
    const [loginError,setLoginError] = useState('')
    const dispatch = useDispatch()
    const loggedInuser = useSelector(state=>state.user);
     const {loading,error,userInfo} = loggedInuser

useEffect(()=>{
    if(userInfo){
        history.push('/')
    }
    if(error){
      setLoginError('Invalid creditials')
    }
},[userInfo,error])
  const getexactDays = (date) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(date);
    const dayName = dayNames[d.getDay()]
    return dayName

  }
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log("onsubmit clicked")
    dispatch(login(email,password))
    history.push('/')

  }
  return (
    <Fragment>
       {!loading ?
        <div className="container register  c-default-layout flex-row align-items-center">
          <div className="row">
            <div className="col-md-2 col-sm-12 register-left">
              {/* <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" /> */}
              <i className="fa fa-hospital-o" style={{ fontSize: 84 }} aria-hidden="true"></i>
              <h3>Welcome</h3>
              <p><strong>You know well that the education matters,
                Relation between you and your school is the only thing we care most,Come on! login and make difference in person's education life!</strong></p>
              <input type="submit" name="" value="Life matters dear!" /><br />
            </div>
            <div className="col-md-9 register-right">
              <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">

                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="https://www.google.com" role="tab" aria-controls="profile" aria-selected="false">KLW Digital AB</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3 className="register-heading">Schools Managiment System(SMS)</h3>
                  <div className="row register-form">
                    <div className="col-md-8">
                      <form onSubmit={e => this.onSubmit(e)}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email address *"
                            name="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            name="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            minLength="6"
                            value={password}
                            required

                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btnRegister"
                            value="Login"
                            onClick={(e)=>onSubmitHandler(e)}
                             />
                            {' '}
                          <Link to='/forgot_password' className="btnRegister">Forgot  password</Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3">
                      <h3 className="text-primary text-center">Happy thunderous {getexactDays(new Date())}</h3>
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
          </div>

        </div>
        : <section className="container">
          <center>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={8000} //3 secs

            />
          </center>
        </section>
      }
    </Fragment>
  )
}

export default Login

