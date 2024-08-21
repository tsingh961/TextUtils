// import logo from './logo.svg';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import { useState } from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=> {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = "#28192d";
      showAlert("success", "Dark mode is enabled");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = "TextUtils is amazing!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Now!!";
      //   }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode is enabled!");
      // document.title = "TextUtils - Light Mode";

    }
  }

  return (
  <div>
  <Router>
     <Navbar title = "Home" mode = {mode} toggleMode={toggleMode} name = "TextUtils"/>
     <Alert alert = {alert}/>
     <div className='container my-3'>
     {/* <TextForm heading = "Enter the text to Analyse"/> */}
     {/*use exact for Exact path */}
     <Routes>
           <Route exact path="/about" element={   
            <About />
          }>
          </Route>
          <Route exact path="/"element={

          <TextForm heading = "Enter Text Below" mode = {mode} showAlert = {showAlert}/>
          }>
          </Route>
      </Routes>
     </div>
     </Router>
  </div>
);
}

export default App;