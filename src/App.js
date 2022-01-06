import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [enable, setEnable] = useState("Enable Light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setEnable("Enable Dark Mode");
      document.body.style.backgroundColor = "#becfe1";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setEnable("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  if (mode === "dark") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "#becfe1";
  }

  return (
    <Router>
      <Navbar
        title="TEXTUTILS"
        mode={mode}
        toggleMode={toggleMode}
        enable={enable}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>

          <Route path="/">
            <TextForm
              heading="Drop/Enter your text here to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
