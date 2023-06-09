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
import User from "../src/components/account/userpro"
import Ide from "../src/index1"
// import Quiz from "../../TeachMeWell/quiz/src/App"
// import Type from "../src/components/account/typewritter"
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
        <Route path="/user" element={<User />} />
        <Route path="/ide" element={<Ide />} />
        {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Routes>
    </BrowserRouter>  
    </Provider>
);}

export default App;