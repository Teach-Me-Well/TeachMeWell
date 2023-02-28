import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from "../src/components/Home/Home"
import Login from './components/Login/login'
import Signup from "./components/Signup/signup"
import Terms from './components/Terms/terms'
import Privacy from "./components/Privacy/Privacy"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Provider store={store}>

    <BrowserRouter>
             {" "}
      <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/signup" element={<Signup />} />




        
      </Routes>
    </BrowserRouter>
    </Provider>
  
);
  
}

export default App;
