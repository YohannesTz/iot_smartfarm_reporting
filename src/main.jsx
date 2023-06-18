import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardComponent from './components/DashboardComponent';
import HomePage from './page/HomePage';
import NotFoundErrorPage from './page/NotFoundErrorPage';
import SignInPage from './page/SignInPage';
import SignUpPage from './page/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardComponent />
      },
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signIn",
        element: <SignInPage />
      },
      {
        path: "/signUp",
        element: <SignUpPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
