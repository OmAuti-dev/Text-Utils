import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);},
      3000)
    

  } 

  
  

  

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled")
      document.title="Text Utils-Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled")
      document.title="Text Utils-Light mode";
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
  
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/><TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/></>
  },
  {
    path: "/about",
    element: <>
  
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/><About/></>
  },


])

  return (
    <>
    
      
      <Alert alert={alert}/>
      <RouterProvider router = {router}/>
      
      
    </>
  );
}


export default App;
