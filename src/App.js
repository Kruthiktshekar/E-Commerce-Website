import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>} />
        <Route path='/products/:id' element = {<Product/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />




     </Routes>
    </>
  );
}

export default App;
