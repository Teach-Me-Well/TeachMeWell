import './styling/index.css';
import './styling/main.css';
import Home from "../src/components/Home/Home"
import Signup from "./components/account/signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/account/signin";
import Reset from "./components/account/reset"
import Afterreset from "./components/account/afterreset"
import Worngreset from "./components/account/worngreset"
import { Provider } from "react-redux";
import store from "../src/Store";
function App() {
  return (
<Provider store={store}>
    <BrowserRouter>
             {" "}
      <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/afterreset" element={<Afterreset />} />
        <Route path="/worngreset" element={<Worngreset />} />
      </Routes>
    </BrowserRouter>  
    </Provider>
);}

export default App;