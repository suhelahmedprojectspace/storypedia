import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllBlog from './pages/AllBlog';
import AddBlog from './pages/AddBlog';
import UpdateBlog from './pages/UpdateBlog';
import UserBlog from './pages/UserBlog';
import Proctected from './pages/ProtectedRoutes';
import Header from './pages/Header';
import DeleteBlog from './pages/DeleteBlog';
import UserAccount from './pages/UserAccount';
import PersonalAccount from './pages/PersonalAccount';


function App() {

  return (
    <div>
      <Header />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getAllBlog" element={<AllBlog />} />
        <Route element={<Proctected />}>
          <Route path="/AddBlog" element={<AddBlog />} />
          <Route path="/updateBlog/:id" element={<UpdateBlog />} />
          <Route path="/deleteBlog/:id" element={<DeleteBlog />} />
          <Route path='/account/:id' element={<UserAccount />} />
          <Route path="/account" element={<PersonalAccount />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
