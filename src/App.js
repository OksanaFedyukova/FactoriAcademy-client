import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ListCourse from './views/ListCourse';
import Home from './views/Home';
import CreateCourse from './components/Outlet/Forms/coursesCRUD/CreateCourse';
import UpdateCourse from './components/Outlet/Forms/coursesCRUD/UpdateCourse';
import ViewCourses from './components/Outlet/Section/ViewCourses';
import Notfoundpage from './views/Notfoundpage';
import ListCourseProtected from './components/Outlet/SectionProtected/ListCourseProtected';
//import {RequiredAuth} from './hoc/RequireAuth';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<ListCourse/>} />
            <Route path='/courses/view' element={<ViewCourses/>} />
            
            
 {/*       <RequireAuth> */}
            <Route path='/coursesprotected' element={<ListCourseProtected/>} />
             <Route path='/courses/create' element={<CreateCourse/>} />
             <Route path='/courses/:id/edit' element={<UpdateCourse/>}/>
  {/*       </RequireAuth> */}
            <Route path='*' element={<Notfoundpage/>} />
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
