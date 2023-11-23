import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Setup from "./Setup.jsx";
import {Collapse} from "antd";
import {categories} from "./components/root/data.jsx";
import CategoryBody from "./components/root/CategoryBody.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Collapse items={categories.map(function (category) {
                    return {
                        key: category.id,
                        label: category.title,
                        children: <CategoryBody category={category}/>
                    }
                })}/>,
            },
            {
                path: "/setup",
                element: <Setup />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
