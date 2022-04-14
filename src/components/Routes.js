import { useRoutes, Navigate } from "react-router-dom";
import Login from "./login-register/Login.tsx";
import Register from "./login-register/Register.tsx";
import HomePage from "./home-page/HomePage.tsx";
const SiteRoutes = ({currentUser}) => {
  
  
  return useRoutes([
    { path: '/login', element: currentUser.authenticated ? <Navigate to='/' replace /> : <Login /> },
    { path: '/register', element: currentUser.authenticated ? <Navigate to='/' replace /> : <Register /> },
    // { path: '/', element: <Header /> },
    { path: '/', element: <HomePage currentUser={currentUser} />}
  ])
}

export default SiteRoutes