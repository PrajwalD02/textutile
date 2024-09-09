import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const alertFun = (message, type) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  setInterval(() => {
    document.title = 'Textutile is Amazing App';
  }, 2000);
  setInterval(() => {
    document.title = 'Install Textutile Now';
  }, 1500);

  const toggle = () => {
    if (mode === 'light') {
      setMode('black');
      document.body.style.backgroundColor = '#10499d';
      alertFun("Dark Mode has been Enabled!", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      alertFun("Light Mode has been Enabled!", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='Textutile' about='About' mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/' element={<TextForm alertFun={alertFun} heading="Enter the Text to Analyze Below" mode={mode} />}/>
          </Routes> */}
          <TextForm alertFun={alertFun} heading="Enter the Text to Analyze Below" mode={mode} />

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
