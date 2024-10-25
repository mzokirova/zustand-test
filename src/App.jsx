
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './components/Register'
import useAuthStore from './utils/authStore'
import { useEffect } from 'react'
import { Bounce, ToastContainer, } from 'react-toastify'
import SingleNews from './components/Home/SingleNews'

function App() {
  const loadUser = useAuthStore((state) => state.loadUser);
  useEffect(() => {
    loadUser(); 
  }, [loadUser]);

  return (
    <>

    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='news/:id' element={<SingleNews/>} />
  <Route path='/create' element={<Create/>} />
  <Route path='/login' element={<Login/>} />
  <Route path="/register" element={<Register />} />

</Routes>
<ToastContainer

position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition:Bounce
/>
    </>
  )
}

export default App
