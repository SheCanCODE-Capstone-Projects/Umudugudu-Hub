import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  return (
    <>
      <div className='cont'>
<p>Reset Password</p>

<h2>Create a new password</h2>
<label className='password'>New Password :</label> 
<br />
<input type="password" />
<br />
<br />
<label className='Cpassword'>Confirm Password :</label>
 <br />
<input type="password" />
<br />
<br />
<br />
<button className='button'>Reset</button>
        </div>
      
    </>
  )
}

export default App
