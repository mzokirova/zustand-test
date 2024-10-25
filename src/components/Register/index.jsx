
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../utils/axios';
import useAuthStore from '../../utils/authStore';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const register = useAuthStore((state) => state.register);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { username, password };
    register(user); 
   alert("You have registered"
   )
    navigate('/'); 
  };

  return (
    <div className="mx-auto container border rounded shadow-sm w-[50%] mt-8 p-2">
      <h2 className='text-xl text-center ' >Register here</h2>
      <form onSubmit={handleRegister} className='flex flex-col gap-y-2 px-20'>
   
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='rounded-lg mt-4 bg-green-700 text-white w-44 p-2' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
