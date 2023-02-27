import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home/Home"
import Login from './components/Login/login'
import Terms from './components/Terms/terms'
import Privacy from "./components/Privacy/Privacy"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    
    <BrowserRouter>
             {" "}
      <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />



        
      </Routes>
    </BrowserRouter>
  
);
  
}

export default App;
