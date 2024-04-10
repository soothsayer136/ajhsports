import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Page404 from './Pages/404/Page404';
import AppNavbar from './components/AppNavbar';
import Signup from './Pages/Signup/Signup';
import Contact from './Pages/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/AdminPages/Dashboard';
import AdminNavbar from './components/AdminComponents/AdminNavbar';
import ProtectedAdminRoute from './components/AdminComponents/ProtectedAdminRoute';
import User from './Pages/AdminPages/User/User';
import Profile from './Pages/Profile/Profile';
import Footer from './components/Footer';
import AdminContact from './Pages/AdminPages/Contact/AdminContact';
import AdminEvents from './Pages/AdminPages/Events/Events';

function App() {

  return (
    <div>
      <AuthContextProvider>
        <Toaster />
        <div className='min-h-screen flex flex-col'>
          <AppNavbar />
          <AdminNavbar />
          <div className='flex-1'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* 404 Page */}
              <Route path="*" element={<Page404 />} />

              {/* Admin Pages */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedAdminRoute>
                    <Dashboard />
                  </ProtectedAdminRoute>
                }
              />
              <Route
                path="/dashboard/users"
                element={
                  <ProtectedAdminRoute>
                    <User />
                  </ProtectedAdminRoute>
                }
              />
              <Route
                path="/dashboard/contact"
                element={
                  <ProtectedAdminRoute>
                    <AdminContact />
                  </ProtectedAdminRoute>
                }
              />
              <Route
                path="/dashboard/events"
                element={
                  <ProtectedAdminRoute>
                    <AdminEvents />
                  </ProtectedAdminRoute>
                }
              />

            </Routes>
          </div>
          <Footer />
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
