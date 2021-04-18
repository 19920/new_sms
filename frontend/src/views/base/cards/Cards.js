import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader style={{backgroundColor:'green',color:'white'}}>
              IFAK(INSTITUT DE FORMATION APOSTOLIQUE DE KIMIHURURA)
              <DocsLink name="CCard"/>
            </CCardHeader>
            <CCardBody style={{backgroundColor:'grey'}}>
             <p className="text-white">Phone:0730893622</p>
             <p className="text-white">Total Classes:40</p>
             <p className="text-white">Status:Active</p>
            </CCardBody>
            <CCardFooter style={{backgroundColor:'blue',color:'white'}}>View</CCardFooter>
          </CCard>
        </CCol>
       
      </CRow>
    </>
  )
}

export default Cards
