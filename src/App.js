import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hygiene from './components/Hygiene';
import Navbar from './components/Navbar';
import Service from './components/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/hygiene' element={ <Hygiene /> } />
            <Route path='/services' element={ <Service /> } />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
