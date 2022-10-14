import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Expertise from './components/Expertise';
import Home from './components/Home';
import Partners from './components/Partners';
import ContactUs from './components/Contact';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Partners/>
      <Expertise/>      
      <ContactUs/>   

     
    </div>
    </BrowserRouter>
  );
}

export default App;
