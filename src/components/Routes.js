import { useRoutes, Navigate} from "react-router-dom";
import Login from "./login-register/Login.tsx";
import Register from "./login-register/Register.tsx";
import HomePage from "./home-page/HomePage.tsx";
import AccountPage from "./account-page/AccountPage.tsx";
import UserPosts from "./account-page/UserPosts.tsx";
import UserComments from "./account-page/UserComments.tsx";
import CreatePost from "./post-page/create-post/CreatePost.tsx";
import PostPage from "./post-page/PostPage.tsx";
import SavedPosts from './account-page/SavedPosts.tsx'
import Messenger from "./messenger/Messenger.tsx";

const SiteRoutes = ({ currentUser }) => {

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
        { path: 'comments', element: <UserComments /> },
        { path: 'saved', element: <SavedPosts /> }
      ]
    },
    {
      path: '/messenger',
      element: currentUser.authenticated ? <Messenger currentUser={currentUser} /> : <Navigate to='/' replace />
    }
  ])
}

export default SiteRoutes