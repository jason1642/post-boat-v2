import { useRoutes } from "react-router-dom";
import Header from './header/Header.tsx'
import Login from "./login-register/Login.tsx";
import Register from "./login-register/Register.tsx";

const SiteRoutes = () => {
  

  return useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    // { path: '/', element: <Header /> },
    // {path: '/', element: <HomePage />}
  ])
}

export default SiteRoutes