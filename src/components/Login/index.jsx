import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { api } from "../../utils/axios";
import useAuthStore from "../../utils/authStore";
import { toast } from "react-toastify";


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useAuthStore((state) => state.login); 
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      
      
      const user = { username, password };
      login(user); 
      alert("Good job")
      location.reload()
      navigate('/'); 
    };
  
    
    
  return (
    <div className="w-[50%] mx-auto rounded shadow-slate-500 border mt-8 p-4 py-6 shadow-sm" >
      <h2 className="text-center text-2xl">Log in to your account</h2>
      <form onSubmit={handleLogin} className="flex  flex-col mx-auto justify-between  w-[90%]">
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
        <button className="rounded bg-green-700 p-2  w-40 text-white mt-8" type="submit">Login</button>
      </form>
      <p className="mt-6  hover:text-xl px-8">
        Not registered? <a href="/register">Register here</a>
      </p>
    </div>
  )
}

export default LoginPage
