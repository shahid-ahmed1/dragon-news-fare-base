import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home.jsx';
import SocialLogin from './components/SocialLogin.jsx';
import CategoryNews from './pages/CategoryNews.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[

      {
        path:'',
        element:<Navigate to='/category/01'></Navigate>,
        
      },
      {
        path:'/category/:id',
      element: <CategoryNews></CategoryNews>,
      loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      
      }
    ]
  },
  {
    path:'auth',
    element:<AuthLayout></AuthLayout>,
    children:[

      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/reigister',
        element:<Register></Register>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
      
  </StrictMode>,
)
