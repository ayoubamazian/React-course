import SignUp from "../Components/sign-up/SignUp";
import SignIn from "../Components/sign-in/SignIn";

import "./authentication.scss"; 

const Authentication = () => {
    return ( 
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default Authentication;