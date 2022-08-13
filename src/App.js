// import logo from "./logo.svg";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
// So props are basically customizable user defined propeties.Also remember the default props and all.
// And as soon as you pass it, it just renders thats all.

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  };
  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#1d3623";
      showAlert("Succesfully turned into green mode", "success");
      document.title = "Text Utility-Green Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Succesfully turned into light mode", "success");
      document.title = "Text Utility-Light Mode";
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d404a";
      showAlert("Succesfully turned into dark mode", "success");
      document.title = "Text Utility-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Succesfully turned into light mode", "success");
      document.title = "Text Utility-Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          toggleModeGreen={toggleModeGreen}
          name="TextUtils"
          aboutText="Know more"
        />
        <Alert alert={alert} />
        {/* <div className="container"> */}
        {/* <Routes>
          {/* /users ---> Component1
          /users/home ---> Component2 */}
          {/* <Route path="/about" element={<About />}> */}
            
          {/* </Route> */}

          {/* <Route path="/" element={<Textform */}
                {/* // showAlert={showAlert} */}
                {/* mode={mode} */}
                {/* heading="Enter text" */}
              {/* />}> */}
            
            <Textform
                showAlert={showAlert}
                mode={mode}
                heading="Enter text"
              />
          {/* </Route>
        </Routes> */}
        {/* </div> */}
        
      {/* </Router> */}
    </>
  );
}

export default App;
