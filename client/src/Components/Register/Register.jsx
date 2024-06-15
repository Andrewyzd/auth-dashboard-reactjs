import React , { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import video_1 from '../../Assest/video_1.mp4'
import icon_1 from '../../Assest/icon_1.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdAttachEmail } from 'react-icons/md'
import { StartFirebase } from '../../database.jsx'
import {
    ref,
    set,
    get,
    update,
    remove, 
    child
} from "firebase/database"


const Register = () => {

  const [newUsername, setUsername] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [db, setDB] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const dbInstance = StartFirebase();
    setDB(dbInstance);
  }, []);
  
const createUser = (event) => {
    event.preventDefault();

    if (!db) {
      alert('Database not initialized.');
      return;
    }

    const userRef = ref(db, 'users/' + newUsername);  // Use username as the key
    set(userRef, {
      email: newEmail,
      username: newUsername,
      password: newPassword,
    })
      .then(() => {
        alert('User is registered successfully');
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/'); // Navigate to login page
      })
      .catch((error) => {
        alert("Error occurs: " + error);
      });
};

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        
        <div className='videoDiv'>
          <video src={video_1} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'> Explore the Extraordinary Landscape</h2>
            <p>Adopt to the peace of nature</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Already have an account?</span>
            <Link to={'/'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={icon_1} alt='Logo Image'/>
          </div>

          <form action="" className='form grid'>
            <span className='showMessage'>
              Please provide your details
            </span>

            {/* Enter email */}
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <MdAttachEmail className='icon'/>
                <input type='text' id='email' placeholder='Enter Email'
                  onChange={(event) => { setEmail(event.target.value); }}
                />
              </div>
            </div>

            {/* Enter username */}
            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                <FaUserShield className='icon'/>
                <input type='text' id='username' placeholder='Enter Username'
                  onChange={(event) => { setUsername(event.target.value); }}
                />
              </div>
            </div>

            {/* Enter password */}
            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon'/>
                <input type='text' id='password' placeholder='Enter Password'
                  onChange={(event) => {setPassword(event.target.value); }}
                />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}> 
              <span>Register</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
              Login to your account <a href="/">Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Register