import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import App        from './App';
import HomeUser   from './components/HomeUser/HomeUser';
import CriarConta from './components/CriarConta/CriarConta';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:"/criarconta",
    element:<CriarConta/>
  },
  {
    path:"/usuario",
    element:<HomeUser />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
