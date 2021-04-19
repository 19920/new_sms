import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import Login from 'src/views/base/school/auth/Login'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = ({user}) => {
  console.log("user from thecontent",user)
  let link;
  if(!user){
    link= "/login"
  }
  else if(user&&user.role =="isSuperUser"){
    link="/all-schools"
  }
  else{
    link = "/dashboard"
  }

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <CFade>
                    <route.component {...props} />
                  </CFade>
                )} />
            )
          })}
          <Redirect to={link} />
        </Switch>
       
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
