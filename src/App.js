import './App.css';
import { Router, BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import Resize from './components/Resize'
import Contact from './components/Contact'
function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/'element={<Home />}></Route>
          <Route exact path='/about'element={<About />}></Route>
          <Route exact path='/features'element={<Features />}></Route>
          <Route exact path='/resize'element={<Resize />}></Route>
          <Route exact path='/contact'element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
