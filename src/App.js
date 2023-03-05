import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from "../src/components/Home/Home"
import Login from './components/account/login'
import Signup from "./components/account/signup"
import Terms from './components/scenes/terms'
import Privacy from "./components/scenes/Privacy"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./components/account/resetpass";
import Afterreset from"./components/account/afterreset.js"
import Worngreset from"./components/account/worngreset";
import Wishlist from "./components/account/wishlist";
import Help from "./components/scenes/helpcenter"
import Cart from "../src/components/CartItems/CartItems";
import Track from "../src/components/scenes/track";
import Error from "../src/components/scenes/error";
import Return from "../src/components/scenes/return";
import Coprate from "../src/components/scenes/coprate"
import Ourcares from "../src/components/scenes/ourcares"
import Ourstore from "../src/components/scenes/ourstore"
import Careers from "../src/components/scenes/careers"
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
                  <Route path="/reset" element={<Reset />} />
                  <Route path="/afterreset" element={<Afterreset />} />
                  <Route path="/worngreset" element={<Worngreset/>} />
                  <Route path="/wishlist" element={<Wishlist/>} />
                  <Route path="/help" element={<Help/>} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/track" element={<Track />} />
                  <Route path="/error" element={<Error />} />
                  <Route path="/return" element={<Return />} />
                  <Route path="/coprate" element={<Coprate />} />
                  <Route path="/ourcares" element={<Ourcares />} />
                  <Route path="/ourstore" element={<Ourstore />} />
                  <Route path="/careers" element={<Careers />} />

        
      </Routes>
    </BrowserRouter>
    </Provider>
  
);
  
}

export default App;