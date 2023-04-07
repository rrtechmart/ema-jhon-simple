import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import CartProductsLoader from './CartProductsLoader/CartProductsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'/orders',
        element: <Orders></Orders>,
        loader: CartProductsLoader,
      },
      {
        path:'/checkout',
        element: <Checkout></Checkout>
      },
      {
        path:'/inventory',
        element: <Inventory></Inventory>,
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
