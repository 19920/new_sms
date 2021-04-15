import React, { lazy } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const dashboardsItems=[
  {id:1,text:'Total Teachers',color:'primary',iconName:'cil-settings'},
  {id:2,text:'Total Students',color:'info',iconName:'cil-settings'},
  {id:3,text:'Total Classes',color:'warning',iconName:'cil-settings'},
  {id:4,text:'Total Inquiries',color:'primary',iconName:'cil-settings'},
  {id:5,text:'Total Payments',color:'success',iconName:'cil-settings'},
  {id:6,text:'Income',color:'danger',iconName:'cil-settings'},
  {id:7,text:'Total Sections',color:'success',iconName:'cil-settings'},
  {id:8,text:'Inquiries active',color:'dark',iconName:'cil-settings'},
  {id:9,text:'Paid invoices',color:'warning',iconName:'cil-settings'},
  {id:10,text:'Payment Received',color:'primary',iconName:'cil-settings'},
  {id:11,text:'Examen with published Timetables',color:'info',iconName:'cil-settings'},
  {id:12,text:'Transfered to other schools',color:'primary',iconName:'cil-settings'},
  {id:13,text:'Unpaid invoices',color:'dark',iconName:'cil-settings'},
  {id:14,text:'Amount By Fees Structure',color:'danger',iconName:'cil-settings'},
  {id:15,text:'Active Students',color:'primary',iconName:'cil-settings'},
  {id:16,text:'Transfered to this school',color:'success',iconName:'cil-settings'},
  {id:17,text:'Examen with published  admit cards',color:'primary',iconName:'cil-settings'},
  {id:18,text:'Partially Paid invoices',color:'warning',iconName:'cil-settings'},
  {id:19,text:'Expense',color:'dark',iconName:'cil-settings'},
  {id:20,text:'Examen with published  results',color:'primary',iconName:'cil-settings'},
]
const Dashboard = () => {
  return (
  
    <CRow>
      {
        dashboardsItems.map(item=>{
          return(
            <CCol sm="6" lg="3">
             <WidgetsDropdown key={item.id} text={item.text} iconName={item.iconName} color={item.color} />
           </CCol>
          ) 
        })
      }
    </CRow>
  
      
  )
}

export default Dashboard
