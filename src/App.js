import logo from './logo.svg';
import './App.css';
import Firstpagepage from "./Loginpage";
import Loginpage from "./Loginpage";

function app() {
  return <loginpage/>
}


// --------------------------------

import {BrowserRouter, Rout} from "React-Router-Dom";
import firstpagee from "./Mainpage";
import loginpage from "./Mainpage";

function App() {
  return <mainpage/>
}


 <Routes>
  <loginpage exact path = "/login" component = {loginpage}/>
</Routes>


export default App;
