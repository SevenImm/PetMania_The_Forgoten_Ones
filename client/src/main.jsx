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
import TheForgotenOnes from './components/MeetTeam.jsx';

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
        path: "/404",
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
      },
      {
        path: "/features",
        element: <Featuresfour />,
      },
      {
        path: "/MeetTeam",
        element: <TheForgotenOnes />,
      },
      

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);