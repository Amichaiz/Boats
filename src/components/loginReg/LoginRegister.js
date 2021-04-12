import React, { useState } from 'react';
import './LoginRegister.css'


//export const AppContext = React.createContext(null);


const LoginRegister = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setclick] = useState(false);

  const addUser = (e) => {
    fetch(`https://boat-prime.herokuapp.com/adduser`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // this needs to be defined
      },
      body: JSON.stringify({ fname, lname, email, password })
    })
      .then(res => res.json())
      .then(data => {
        setStorage()
        if(clicked){
          localStorage.setItem('email',email)
          localStorage.setItem('password',password)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  const checkUser = (e) => {
    e.preventDefault()
    fetch(`https://boat-prime.herokuapp.com/checkuser`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // this needs to be defined
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if(data.answer==='works'){
        setStorage()
        window.location.replace('/')
        if(clicked){
          localStorage.setItem('email',email)
        }
        
      }
      else {    
        document.getElementById('wrong').innerHTML='Wrong Password or Email'
      }
      })
    
      .catch(err => { 
console.log(err);
      })
  }
  const checkbox = () => {
    !clicked ? setclick(true) : setclick(false)
  }
  
  const setStorage = () => {
    sessionStorage.setItem('email', email);
  }

  return (
    <div className='family'>
      {/*login*/}
      <div className='log container-log'>
        <form action='/'>
          <h1 className='center'>Login</h1>
          <div>Email-</div>
          <input className='input-css' type="email" placeholder="example@example.com" required onChange={(e) => setEmail(e.target.value)} />
          <div>Password-</div>
          <input className='input-css' type='password' placeholder='********' required onChange={(e) => setPassword(e.target.value)} />
<div id='wrong'></div>
          <div><input className='input-css' type="checkbox" name=""  value={clicked} onClick={checkbox} />Remember me</div>

          <button type='submit' className='but-sub' onClick={checkUser}>SIGN IN</button>
        </form>
      </div>
      {/*register*/}
      <div className='reg container-log'>
        <form action='/'>
          <h1 className='center'>Register</h1>
          <div>First name-</div>
          <input className='input-css' type="text" placeholder='Sailor' required onChange={(e) => setFname(e.target.value)} />
          <div>Last name-</div>
          <input className='input-css' type="text" placeholder='Captain' required onChange={(e) => setLname(e.target.value)} />
          <div>Email-</div>
          <input className='input-css' type="email" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
          <div>Password-</div>
          <input className='input-css' type='password' placeholder='********' required onChange={(e) => setPassword(e.target.value)} />
          <div><input className='input-css' type="checkbox" name=""  value={clicked} onClick={checkbox} />Remember me</div>
          <button type='submit' className='but-sub' onClick={addUser} value='button'>REGISTER</button>
        </form>
      </div>

    </div>
  );
}

export default LoginRegister;
