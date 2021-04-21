import React from 'react';
import AllStaff from './views/base/school/allStaff';
import AssignAdmin from './views/base/school/AssignAdmin';
import AssignTeacherToSubject from './views/base/school/AssignTeacherToSubject';
import Attendance from './views/base/school/Attendance';
import Login from './views/base/school/auth/Login';
import BulkAdmission from './views/base/school/BulkAdmission';
import Events from './views/base/school/Events';
import ExaminationDashboard from './views/base/school/ExaminationDashboard';
import FeeTypes from './views/base/school/FeeTypes';
import HomeWorks from './views/base/school/HomeWorks';
import IncomeDashbord from './views/base/school/IncomeDashbord';
import LiveClass from './views/base/school/LiveClass';
import NewClass from './views/base/school/newClasse';
import NewExam from './views/base/school/NewExam';
import NewHomeWork from './views/base/school/NewHomeWork';
import NewNoticeBoard from './views/base/school/NewNoticeBoard';
import NewSection from './views/base/school/newSection';
import NewStaff from './views/base/school/newStaff';
import NewStudent from './views/base/school/NewStudent';
import NewStudyMaterial from './views/base/school/NewStudyMaterial';
import AllSubject from './views/base/school/newSubject';
import NoticeBoard from './views/base/school/NoticeBoard';
import Schools from './views/base/school/Schools';
import SchoolSettings from './views/base/school/SchoolSettings';
import SingleStudentLeave from './views/base/school/SingleStudentLeave';
import StudentDashbord from './views/base/school/StudentDashboard';
import StudentLeaves from './views/base/school/StudentLeave';
import Students from './views/base/school/Students';
import StudyMaterials from './views/base/school/StudyMaterials';
import TimeTable from './views/base/school/timetable';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const NewSchool = React.lazy(() => import('./views/base/school/newSchool'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  //{ path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/schools/myschool', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/schools/newSchool', exact: true,  name: 'New School', component: NewSchool },
  { path: '/schools/NewClass', exact: true,  name: 'New Class', component: NewClass },
  { path: '/schools/sections', exact: true,  name: 'New Section', component: NewSection },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/schools/staff', exact: true, name: 'New Staff', component: NewStaff },
  { path: '/all-schools', exact: true, name: 'All Schools', component: Schools },
  { path: '/schools/allstaff', exact: true, name: 'All Staff', component: AllStaff },
  { path: '/accounting/dashbord', exact: true, name: 'All Staff', component: IncomeDashbord },
  { path: '/accounting/feetypes', exact: true, name: 'All Fee Types', component: FeeTypes },
  { path: '/student/dashboard', exact: true, name: 'All Fee Types', component: StudentDashbord },
  { path: '/student/admission', exact: true, name: 'New Student', component: NewStudent },
  { path: '/students', exact: true, name: 'All Students', component: Students },
  { path: '/students/bulkadmission', exact: true, name: 'Bulk Admission', component: BulkAdmission },
  { path: '/school/:id/assign-user', exact: true, name: 'Assign owner', component: AssignAdmin },
  { path: '/school/all-subjects', exact: true, name: 'All subjects', component: AllSubject },
  { path: '/school/class-timetable', exact: true, name: 'All subjects', component: TimeTable },
  { path: '/school/teachers-timetable', exact: true, name: 'All subjects', component: AssignTeacherToSubject },
  { path: '/school/class-attendances', exact: true, name: 'My Class Attendances', component: Attendance },
  { path: '/school/stuent-leaves', exact: true, name: 'Student Leaves', component: StudentLeaves },
  { path: '/school/student-leaves/id', exact: true, name: 'Student Leave', component: SingleStudentLeave },
  { path: '/school/study-materials', exact: true, name: 'Study Materials', component: StudyMaterials },
  { path: '/school/new-study-material', exact: true, name: 'Study Materials', component: NewStudyMaterial },
  { path: '/school/homeworks', exact: true, name: 'Study Materials', component: HomeWorks },
  { path: '/school/new-homework', exact: true, name: 'Study Materials', component: NewHomeWork },
  { path: '/school/class-noticeboard', exact: true, name: 'Class NoticeBoard', component: NoticeBoard },
  { path: '/school/new-class-notice', exact: true, name: 'New Class NoticeBoard', component: NewNoticeBoard },
  { path: '/school/events', exact: true, name: 'All Events', component: Events },
  { path: '/school/live-classes', exact: true, name: 'Live Class', component: LiveClass },
  { path: '/school/settings', exact: true, name: 'Live Class', component: SchoolSettings },
  { path: '/examination/dashboard', exact: true, name: 'Live Class', component: ExaminationDashboard },
  { path: '/students/new-exam', exact: true, name: 'Live Class', component: NewExam },
  { path: '/login', exact: true, name: 'Login', component: Login },
];

export default routes;
