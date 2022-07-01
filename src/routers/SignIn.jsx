import { signInpopup,CreateUserDocument } from "../utils/Firebase";
import SignUp from "../sign-up/SignUp";


const SignIn = () => {
    const logGoogle = async () =>{
        const {user} = await signInpopup();
        const userdoc = await CreateUserDocument(user);
    }

    return ( 
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogle}>SignIn With Google</button>
            <SignUp/>
        </div>
     );
}
 
export default SignIn;