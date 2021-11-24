import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes><Route path='/Register' element={<Register/>} /> </Routes>
      <Routes><Route path='/' element={<Home/>} /> </Routes>
      

    </BrowserRouter>
  );
}

export default App;
