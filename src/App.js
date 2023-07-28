import { useState } from "react";
import "./App.css";
import { Login } from "./components/login";
import {Register} from "./components/register";
function App() {
  const[currentForm , setCurrentForm] = useState('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App"> {

      currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> :<Register onFormSwitch={toggleForm}/>
     }
     
    </div>
  );
}

export default App;
