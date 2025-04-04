import React,{useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" className='bg-black text-white rounded text-center p-1'
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder='Username' />
      {" "}
      <input type="password" className='bg-black text-white rounded text-center p-1'
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder='Password' />
      {" "}
      <button onClick={handleSubmit} className='bg-green-400 rounded text-white p-1'>Submit</button>
    </div>
  )
}

export default Login
