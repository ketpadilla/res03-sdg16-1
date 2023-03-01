import logo from "./images/logo.png";
import './App.css';
import React, {useState} from 'react';
import * as LogIn from './loginform';
import Swal from 'sweetalert2';

function App() {
  const [user, setUser] = useState({name: "", email: ""}) // Current user logged in
  
  const Login = details => {
    if(details.email == LogIn.Admin.email) {
      if(details.password == LogIn.Admin.password) {
        setUser({
          name: details.name,
          email: details.email
        })
      } else {err()}
    } else {err()}
  }

  function err() {
    Swal.fire({
      title: 'Email/Password mismatch',
      position: 'top',
      toast: true,
      color: '#00051a',
      background: '#ffffff',
      timer: '2000',
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
  const Logout = () => {
    setUser({
      name: "",
      email: ""
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {(user.email != "") ? (
          <div>
            <h3>Welcome, <span>{user.name}</span>!</h3>
            <button className='App-button' onClick={Logout}>LOG OUT</button>
          </div>
        ):(
          <LogIn.default Login={Login}/>
        )}
      </header>
    </div>
  );
}

export default App;
