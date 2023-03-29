
import {Routes,Route} from 'react-router-dom'
import About from "./pages/About";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import Policy from "./pages/Policy";
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';



function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/dashboard"  element={<Dashboard/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/policy"  element={<Policy/>}/>
        <Route path="*"  element={<Pagenotfound/>}/>
      </Routes>
    </>
    
  );
}

export default App;
