import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  // We connot mode = light; update it because it us a State
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#071548';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
      setTimeout(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setTimeout(() => {
        document.title = 'Install TextUtils is Amazing Mode';
      }, 1500);
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUlils" /> */}
      {/* <Navbar /> */}
      <Router>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert ={alert}/>
      <div className= "container my-3">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyser below " mode={mode}/>
          </Route>
      </Switch>
      </div>
      </Router>
    </>
  )
}
export default App;

{/* /users --> Component 1
    /users/home --> Component 2
    to avoid this use exact in path*/}