import  Nav  from './components/Nav';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Contacto from './views/Contacto';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
