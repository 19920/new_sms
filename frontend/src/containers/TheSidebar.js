import React from 'react'
import {_nav,isSuperUser,isTransportAdmin,isUseTeacher,isLibraryAdmin} from './_nav'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config


const TheSidebar = ({user}) => {
  const dispatch = useDispatch()
  const {sidebarShow} = useSelector(state => state.sidebarShow)
  let navigation
   if(user&&user.role=="Teacher"){
     navigation = isUseTeacher
   }else if(user&&user.role=="Library"){
     navigation = isLibraryAdmin
   }else if(user&&user.role=="SuperUser"){
    navigation = isSuperUser
  }else if(user&&user.role=="isTransportAdmin"){
    navigation = isTransportAdmin
  }else if(user&&user.role=="Admin"){
    navigation = _nav
  }

   return(
    <CSidebar
    show={sidebarShow}
    onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
  >
    {/* <CSidebarBrand className="d-md-down-none" to="/">
      <CIcon
        className="c-sidebar-brand-full"
        name="logo-negative"
        height={35}
      />
      <CIcon
        className="c-sidebar-brand-minimized"
        name="sygnet"
        height={35}
      />
    </CSidebarBrand> */}
    <CSidebarNav>

      <CCreateElement
        items={navigation}
        components={{
          CSidebarNavDivider,
          CSidebarNavDropdown,
          CSidebarNavItem,
          CSidebarNavTitle
        }}
      />
    </CSidebarNav>
    <CSidebarMinimizer className="c-d-md-down-none"/>
  </CSidebar>
   )
  
}

export default React.memo(TheSidebar)
