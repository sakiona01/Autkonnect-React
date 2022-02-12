import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser(null)
            navigate("/")
        }
    })
}


  function onLoginSubmit(e) {
    console.log("logging in..")
    e.preventDefault()
    setErrors([])
    const user = { username: userLog, password: passLog }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
            setCurrentUser(user)
            navigate('/services')
          })
        } else {
          res.json().then(errors => {
            setErrors(errors.errors)
          })
        }
      })
    }

  return (
    <div>
    <div className="form-container">
      <div className="form-content-right">
      <form className="form" onSubmit={onLoginSubmit}>
      <label className="form-label">Username: </label>
        <input className="form-inputs" type='text' value={userLog} onChange={(e) => setUserLog(e.target.value)}></input>
      <label className="form-label">Password: </label>
        <input className="form-inputs" type='password' value={passLog} onChange={(e) => setPassLog(e.target.value)}></input>
        <button className="form-input-btn" type='submit' value='login'>Login</button>
        {errors}
      </form>
    </div>
    </div>
    <div>
      <button className="log-out-btn" onClick={handleLogout}>Logout</button>
      {errors}
    </div>
    </div>
  )
}

export default Login;
