import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import Order from "./pages/Order.jsx"
import Signup from "./pages/Sign.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
