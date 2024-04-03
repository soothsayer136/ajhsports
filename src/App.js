import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Page404 from './Pages/404/Page404';
import AppNavbar from './components/AppNavbar';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <Toaster />
        <div className='min-h-screen flex flex-col'>
          <AppNavbar />
          <div className='flex-1'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* 404 Page */}
              <Route path="*" element={<Page404 />} />

            </Routes>
          </div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
