
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import SignUp from './pages/SignUp';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/offers' element={<Offers/>}/>
    </Routes>
  );
}

export default App;
