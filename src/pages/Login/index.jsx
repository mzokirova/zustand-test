import { useEffect } from "react";
import LoginPage from "../../components/Login"
import useAuthStore from "../../utils/authStore";

const Login = () => {
  const loadUser = useAuthStore((state) => state.loadUser);
  useEffect(() => {
    loadUser(); 
  }, [loadUser]);
  return (
    <div className="mx-auto container">
      <LoginPage/>
    </div>
  )
}

export default Login
