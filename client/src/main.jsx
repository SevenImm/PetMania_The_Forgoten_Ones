import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Featuresfour from './components/Features.jsx';
import MeetTeam from './pages/MeetTeam.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/NotFound",
        element: <NotFound />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },{
        path: '/MeetTeam',
        element: <MeetTeam />
      },
      {
        path: "/features",
        element: <Featuresfour />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);