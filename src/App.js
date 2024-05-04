import Navbar from './Components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Footer from './Components/Footer';
import  Blogging  from './pages/Blogging';
import MainMenu from './pages/MainMenu';
import CartList from './pages/CartList'
function App() {

  return (
    <div className='App  w-full h-screen '>
   <Navbar/>
  
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Menu' element={<Menu/>}/>
  <Route path='/ContactUs' element={<ContactUs/>}/>
  <Route path='/Blog' element={<Blog/>}/>
  <Route path='/SignIn' element={<SignIn/>}/>
  <Route path='/Blogging/:Id' element={<Blogging/>}/>
  <Route path='/MainMenu' element={<MainMenu/>}/>
  <Route path='/Menu/:Id' element={<Menu/>}/>
  <Route path='/CartList' element={<CartList/>}/>
  </Routes>
  <Footer/>
  </div>
  );
}

export default App;
