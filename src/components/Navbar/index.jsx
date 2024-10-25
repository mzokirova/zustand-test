import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          setUser(storedUser);
        }
      }, []);
      const handleLogout = () => {

        localStorage.removeItem('user');
        setUser(null);
      };
  return (
    <header className=' bg-slate-100 py-6'>
      <nav className=' container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl'>Logoipsum</h1>
        <ul className='flex justify-center items-center gap-20'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/create">Create</Link>
            </li>
          
        </ul>
        {user ? (
          <div className="flex items-center gap-4">
            <span className='capitalize'>Welcome, {user.username}</span>
            <button onClick={handleLogout} className="text-blue-700 hover:underline">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-blue-700 hover:underline">
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Navbar
