
import { Route, BrowserRouter, Routes } from 'react-router-dom';
//import UserCourses from './components/Outlet/Section/UserCourses.jsx';
import Home from './views/Home.jsx';
import CreateCourse from './components/Outlet/Forms/coursesCRUD/CreateCourse.jsx';
import UpdateCourse from './components/Outlet/Forms/coursesCRUD/UpdateCourse.jsx';
import UserCourses from './components/Outlet/Section/UserCourses/UserCourses.jsx'
import CreateUser from './components/Outlet/Forms/usersCrud/CreateUser.jsx';
import UpdateUser from './components/Outlet/Forms/usersCrud/UpdateUser.jsx';
import Notfoundpage from './views/Notfoundpage.jsx';
import ListCourseProtected from './components/Outlet/SectionProtected/ListCourseProtected.jsx';
import ListUsersProtected from './components/Outlet/SectionProtected/ListUsersProtected.jsx';
import Admin from './views/Admin.jsx';
import UserProfile from "./views/UserProfile.jsx";
import Cursos from './views/Cursos.jsx';
import DetailCourse from './views/DetailCourse.jsx';
import Layout from '../src/components/Layouts/Layout.jsx'


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='*' element={<Notfoundpage/>} />
            <Route path='/user' element={<UserProfile/>} />
            <Route path='/courses/:id' element={<DetailCourse/>} />

 {/*       <RequireAuth> */} 
      <Route element={<Layout />}>
           <Route path='/admin' element={<Admin/>} />

             <Route path='/coursesprotected' element={<ListCourseProtected/>} />
             <Route path='/courses/create' element={<CreateCourse/>} />
             <Route path='/courses/:id/edit' element={<UpdateCourse/>}/>

          {/*  USERS */}

             <Route path='/usersprotected' element={<ListUsersProtected/>} />
             <Route path='/users/create' element={<CreateUser/>} />
             <Route path='/users/:id/edit' element={<UpdateUser/>}/>

             <Route path='/user-courses' element={<UserCourses/>}/>

  {/*       </RequireAuth> */}
    </Route>
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
