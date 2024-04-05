
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import PetPage from './Pages/PetPage';
import PageNotFound from './Pages/PageNotFound';
import DrPage from './Pages/DrPage';
import DoctorList from './Pages/DoctorList';
import Appoinment from './Pages/Appoinment';
import AdminLogin from './Pages/AdminLogin';
import HomeAdmin from './Pages/HomeAdmin';



function App() {
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/' element={<Auth/>}/> 
  <Route path='/register' element={<Auth register/>}/>
  <Route path='/home/:id' element={<PetPage/>}/>
  <Route path='/doctor/:id' element={<DrPage/>}/> 
  <Route path='/doctor' element={<DoctorList/>}/>
  <Route path='/appointment/:id' element={<Appoinment/>}/>
  <Route path='/adminLogin' element={<AdminLogin/>}/> 

  <Route path='/adminHome' element={<HomeAdmin/>}/>

  <Route path='*' element={<PageNotFound/>}/>
  
</Routes>
<Footer/>
    </div>
  );
}

export default App;
