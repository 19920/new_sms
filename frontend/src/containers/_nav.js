import React from 'react'
import CIcon from '@coreui/icons-react'


const auth=[
  {
    _tag: 'CSidebarNavItem',
    name: 'School Management (SMS)',
    to: '/login',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Welcome',
    route: '/login',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]
const isSuperUser=[
  {
    _tag: 'CSidebarNavItem',
    name: 'School Management (SMS)',
    to: '/all-schools',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Manage Schools',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Schools',
        to: '/all-schools',
      },
      
      {
        _tag: 'CSidebarNavItem',
        name: 'New School',
        to: '/schools/newSchool',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New User',
        to: '/users/new-user',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]
const isUseTeacher=[
  {
    _tag: 'CSidebarNavItem',
    name: 'School Management (SMS)',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Academic',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sections',
        to: '/schools/sections',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subjects',
        to: '/school/all-subjects',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Timetable',
        to: '/school/class-timetable',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Attendance',
        to: '/school/class-attendances',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Leaves',
        to: '/school/stuent-leaves',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Study Materials',
        to: '/school/study-materials',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Home Work',
        to: '/school/homeworks',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Noticeboard',
        to: '/school/class-noticeboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Events',
        to: '/school/events',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Live Classes',
        to: '/school/live-classes',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Student',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/student/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Admission',
        to: '/student/admission',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Students',
        to: '/Students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ID Cards',
        to: '/student/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Promote',
        to: '/student/promotion',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transfer Student',
        to: '/student/transfer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Certificates',
        to: '/student/certificates',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Notifications',
        to: '/student/notifications',
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Examination',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/examination/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Exams',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Exam Admit Cards',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Exam Results',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Exam Assessment',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]


const isLibraryAdmin=[
  {
    _tag: 'CSidebarNavItem',
    name: 'School Management (SMS)',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Library',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/library/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Books',
        to: '/library/books',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Books Issued',
        to: '/library/issued-books',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Library Cards',
        to: '/library/cards',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]
const isTransportAdmin=[
  {
    _tag: 'CSidebarNavItem',
    name: 'School Management (SMS)',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Transport',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inquiries',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Settings',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Logs',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]
const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'School Management (SMS)',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'My School',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/base/cards2',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'My School',
        to: '/schools/myschool',
      },
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Classes',
        to: '/schools/NewClass',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sessions',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Settings',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'License',
        to: '/base/forms',
      },
      
    
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM School',
    route: '/buttons',
    icon: 'cil-chart-pie',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/base/cards2',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inquiries',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Settings',
        to: '/school/settings',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Logs',
        to: '/buttons/button-dropdowns',
      }
    ],
  },  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Student',
    route: '/buttons',
    icon: 'cil-ban',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/student/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Admission',
        to: '/student/admission',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Students',
        to: '/Students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ID Cards',
        to: '/student/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Promote',
        to: '/student/promotion',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transfer Student',
        to: '/student/transfer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Certificates',
        to: '/student/certificates',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Notifications',
        to: '/student/notifications',
      },

    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Academic',
    route: '/buttons',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sections',
        to: '/schools/sections',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subjects',
        to: '/school/all-subjects',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Timetable',
        to: '/school/class-timetable',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Attendance',
        to: '/school/class-attendances',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Leaves',
        to: '/school/stuent-leaves',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Study Materials',
        to: '/school/study-materials',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Home Work',
        to: '/school/homeworks',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Noticeboard',
        to: '/school/class-noticeboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Events',
        to: '/school/events',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Live Classes',
        to: '/school/live-classes',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Student',
    route: '/buttons',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/student/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Admission',
        to: '/student/admission',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Students',
        to: '/Students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ID Cards',
        to: '/student/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Promote',
        to: '/student/promotion',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transfer Student',
        to: '/student/transfer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Certificates',
        to: '/student/certificates',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Notifications',
        to: '/student/notifications',
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Administrator',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Staff',
        to: '/schools/allstaff',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Staff',
        to: '/schools/staff',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff Attendance',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff Leaves',
        to: '/buttons/button-dropdowns',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Accounting',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/accounting/dashbord',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Income',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Expenses',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fee Types',
        to: '/accounting/feetypes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fee Invoices',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Examination',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/examination/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Exams',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Exam Admit Cards',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Exam Results',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Exam Assessment',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Library',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/library/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Books',
        to: '/library/books',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Books Issued',
        to: '/library/issued-books',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Library Cards',
        to: '/library/cards',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SM Transport',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inquiries',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Settings',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Logs',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  

  

  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export  {
  _nav,
  isLibraryAdmin,
  isUseTeacher,
  isTransportAdmin,
  isSuperUser,
  auth
} 
