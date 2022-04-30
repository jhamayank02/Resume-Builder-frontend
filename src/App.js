import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Home/>    
    </BrowserRouter>
    </>
  );
}

export default App;
