import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import video_1 from '../../Assest/video_1.mp4'
import icon_1 from '../../Assest/icon_1.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { StartFirebase } from '../../database.jsx';
import { ref, get, child } from "firebase/database";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const db = StartFirebase();

  const handleLogin = async (event) => {
    event.preventDefault(); //to prevent default form submission

    if (!username || !password) {
      setMessage("Please enter both username and password");
      return;
    }

    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `users/${username}`));

      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          navigate('/dashboard');
        } else {
          setMessage("Incorrect password");
        }
      } else {
        setMessage("Username does not exist");
      }
    } catch (error) {
      setMessage("Error occurred: " + error.message);
    }
  };

  return (
        <div className='loginPage flex'>
          <div className='container flex'>    
            <div className='videoDiv'>
              <video src={video_1} autoPlay muted loop></video>

              <div className='textDiv'>
                <h2 className='title'> Explore the Extraordinary Analysis</h2>
                <p>Adopt to the peace of digitalization</p>
              </div>

              <div className='footerDiv flex'>
                <span className='text'>Do you have an account?</span>
                <Link to={'/register'}>
                  <button className='btn'>Sign Up</button>
                </Link>
              </div>
            </div>

            <div className='formDiv flex'>
              <div className='headerDiv'>
                <img src={icon_1} alt='Logo Image'/>
                <h3>Welcome Back!!!</h3>
              </div>

              <form className='form grid' onSubmit={handleLogin}>
                <span className='showMessage'>
                  Login Status will go here
                </span>
                {message && (
                  <span className='showStatusMessage'>
                    {message}
                  </span>
                )}
                
                {/* Enter username */}
                <div className='inputDiv'>
                  <label htmlFor='username'>Username</label>
                  <div className='input flex'>
                    <FaUserShield className='icon'/>
                    <input type='text' 
                           id='username' 
                           placeholder='Enter Username' 
                           value={username} 
                           onChange={(event) => { setUsername(event.target.value); }}/>
                  </div>
                </div>

                {/* Enter password */}
                <div className='inputDiv'>
                  <label htmlFor='password'>Password</label>
                  <div className='input flex'>
                    <BsFillShieldLockFill className='icon'/>
                    <input type='text' 
                           id='password' 
                           placeholder='Enter Password' 
                           value={password}
                           onChange={(event) => { setPassword(event.target.value); }}/>
                  </div>
                </div>

                <button type='submit' className='btn flex'>
                  <span>Login</span> 
                  <AiOutlineSwapRight className='icon'/>
                </button>

                <span className='forgotPassword'>
                  Forgot your password? <a href="/register">Click Here</a>
                </span>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Login
