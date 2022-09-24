import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Services from './Pages/Services';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Careers from './Pages/Careers';
import Sidebar from './Pages/Sidebar';
import Analytics from './Pages/Analytics';
import Comment from './Pages/Comment';
import Product from './Pages/Product';
import Dashboard from './Pages/Dashboard';
import ProductList from './Pages/ProductList';
import Cards from './Pages/Cards';


function App() {

  
  return (
    <div >
    <div className='header logo'>
     <img className='log' src={"https://www.arcis.ai/images/arcisLogo_white.png"} alt="" />

     <h2>ARCIS AI</h2>
   
    <span className=' icon'>
    <img src={'https://cdn-icons-png.flaticon.com/128/724/724715.png'} alt='chat' />
    <img src={'https://cdn-icons-png.flaticon.com/128/3643/3643448.png'} alt='contact' />
    <img src={'https://cdn-icons-png.flaticon.com/128/938/938899.png'} alt='mail' />
    </span>
    </div>
    <div>
       <Home/>
      <div className='router'>
        <Routes>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/careers' element={<Careers/>}/>
        </Routes>
      </div>
        <Sidebar className="matter"/>
        <Routes>
          <Route path='/default' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/comment' element={<Comment/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
      
        </Routes>
        
    </div>
    </div>
   

  );
}

export default App;
