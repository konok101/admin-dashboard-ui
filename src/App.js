import logo from './logo.svg';
import './App.css';

import NavItem from './Pages/Navbar/NavItem'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
       <NavItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </div>
  );
}

export default App;
