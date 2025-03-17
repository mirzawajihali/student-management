import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";  
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/Jobs/JobDetails";
import PrivateRouter from "./PrivateRouter";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/jobs",
            element:<Jobs></Jobs>
        },
        {
            path:"/jobs/:id",
            element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;