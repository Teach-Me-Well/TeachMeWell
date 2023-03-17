import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from "../src/components/Home/Home"
import Signup from "./components/account/signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

    <Provider store={store}>

    <BrowserRouter>
             {" "}
      <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                 
                 




        
      </Routes>
    </BrowserRouter>
    </Provider>
  
);
  
}

export default App;