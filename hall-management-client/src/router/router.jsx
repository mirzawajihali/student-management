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
import Token from "../tokens/Token";
import ErrorSection from "../pages/Common/ErrorSection";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/Jobs/AddJob";
import MyPostedJobs from "../pages/Jobs/MyPostedJobs";
import ViewApplications from "../pages/Jobs/ViewApplications";
import Developer from "../pages/Developer";

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
          path:"*",
          element:<ErrorSection></ErrorSection>
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
            path:"/token",
            element:<Token></Token>
          },
        {
            path:"/jobs",
            element:<Jobs></Jobs>
        },
        {
            path:"/jobs/:id",
            element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:"/myApplications",
            element:<PrivateRouter><MyApplications></MyApplications></PrivateRouter>
        },
        {
              path:"/addJob",
              element:<PrivateRouter><AddJob></AddJob></PrivateRouter>
          },
          {
            path:"/myPostedJobs",
            element:<PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>
          },
          {
            path:"/viewApplications/:jobId",
            element:<PrivateRouter><ViewApplications></ViewApplications></PrivateRouter>,
            loader:({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.jobId}`)
          },
          {
            path:"/developer",
            element:<Developer></Developer>
          },
      ]
    }
  ]);

  export default router;