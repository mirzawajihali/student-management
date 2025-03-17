import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRouter = ({children}) => {

    const location = useLocation();


    const {user, loading } = useContext(AuthContext);
    if(loading){

        return(
        <div className="flex min-h-screen justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>

        </div>)
    }
    if(user && user.email){
        return children;
    }
    return (
      <Navigate  to='/login'  state={{from:location}}/>
    );
};

export default PrivateRouter;