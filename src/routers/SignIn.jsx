import { signInpopup,CreateUserDocument } from "../utils/Firebase";


const SignIn = () => {
    const logGoogle = async () =>{
        const {user} = await signInpopup();
        const userdoc = await CreateUserDocument(user);
    }

    return ( 
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogle}>SignIn With Google</button>
        </div>
     );
}
 
export default SignIn;