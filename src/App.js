
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import React, { useState } from 'react'
import Alert from './componets/Alert';
import About from './componets/About';
import Footer from './componets/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {

  let [mode, setMode] = useState("ligth")

  let [alert, setAlert] = useState(null)

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const togglemode = () => {

    if (mode === 'ligth') {
      setMode('dark')
      document.body.style.backgroundColor = "#051b3d"
      showAlert(" Dark mode has been Enable", "success")
    }
    else {
      setMode('ligth')
      document.body.style.backgroundColor = "white"
      showAlert(" Ligth mode has been Enable", "success")
    }

  }


  return (
    <>

      <Router>
        {/* navbar */}
        <Navbar title={"TextEditer"} mode={mode} togglemode={togglemode} />
        {/* alert */}
        <Alert alert={alert} />

        <div className={`container my-3 text-${mode==='dark'?'ligth':'dark'} `}>
          {/* About */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode}  />}>
            </Route>
            {/* textarea */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} hadinng={"Enter the Text"} />}>
            </Route>
          </Routes>
        <Footer mode={mode}/>
        </div>
      </Router>


    </>
  );
}

export default App;
