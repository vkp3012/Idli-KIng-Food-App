import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
// import Order from "./pages/Order.jsx"
import Search from "./pages/Search.jsx"
import Login from "./pages/Login.jsx"
import Help from "./pages/Help.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
