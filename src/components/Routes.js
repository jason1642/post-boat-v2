import { useRoutes, Navigate, useLocation, useMatch } from "react-router-dom";
import Login from "./login-register/Login.tsx";
import Register from "./login-register/Register.tsx";
import HomePage from "./home-page/HomePage.tsx";
import AccountPage from "./account-page/AccountPage.tsx";
import UserPosts from "./account-page/UserPosts.tsx";
import UserComments from "./account-page/UserComments.tsx";
import CreatePost from "./post-page/create-post/CreatePost.tsx";
import { useEffect } from "react";
import PostPage from "./post-page/PostPage.tsx";

const SiteRoutes = ({ currentUser }) => {
  const location1 = useLocation()
  const match = useMatch('/user/:id')
  useEffect(() => {
    // console.log(location1)
    // console.log(match)
  }, [])
  return useRoutes([
    {
      path: '/login',
      element: currentUser.authenticated ? <Navigate to='/' replace /> : <Login />
    },
    {
      path: '/register',
      element: currentUser.authenticated ? <Navigate to='/' replace /> : <Register />
    },
    {
      path: '/',
      element: <HomePage currentUser={currentUser} />
    },
    {
      path: '/category/:category',
      element: <HomePage currentUser={currentUser} />
    },
    {
      path: '/post/:id',
      element: <PostPage currentUser={currentUser} />
    },
    {
      path: '/create-post',
      element: <CreatePost currentUser={currentUser}/>
    },
    {
      path: '/user/:id',
      element: <AccountPage currentUser={currentUser} />,
      children: [
        { path: 'posts', element: <UserPosts /> },
        { path: '', element: <UserPosts /> },
        { path: 'comments', element: <UserComments />}
      ]
    },
  ])
}

export default SiteRoutes