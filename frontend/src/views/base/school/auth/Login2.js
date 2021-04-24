
import React, { Component, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import './Login.css';

import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false


    }

  }
//   componentDidMount() {
//     if (this.props.isAuthenticated && this.props.user) {
//       //console.log('user from login', this.props.user)
    
//       return <Redirect to='/patients' />
//     }
//   }
  handleInputChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  getexactDays = (date) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(date);
    const dayName = dayNames[d.getDay()]
    return dayName

  }
  onSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true })
    const { history } = this.props;
    const { email, password } = this.state
    if (password == '' || email == '') {
      this.setState({ loading: false })
    } else {
      this.props.login(email, password, history);
      this.props.getAllPatients();
      this.setState({ loading: false })
    }
  }
  render() {
    const { email, password } = this.state;
    if (this.props.isAuthenticated && this.props.user) {
      console.log('user from login', this.props.user)
      this.props.getAllPatients();
      this.props.history.push("/patients")
    }
    return <Fragment>
      {!this.state.loading ?
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
                            minLength="6"
                            value={password}
                            required

                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btnRegister"
                            value="Login" />
                            {' '}
                          <Link to='/forgot_password' className="btnRegister">Reset password</Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3">
                      <h3 className="text-primary text-center">Happy thunderous {this.getexactDays(new Date())}</h3>
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
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }
}
export default withRouter(Login);