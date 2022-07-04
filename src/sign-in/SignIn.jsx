import { useState } from "react";
import Button from "../Button/Button"
import FormInput from "../form-Input/formInput";
import { signInpopup, SignInEmailAndPasswordAuth } from "../utils/Firebase";
import "./SignIn.scss"

const defaultFormFields = {
    email:"",
    password:"",
}


const SignIn = () => {

    const [Champs,setChamps] = useState(defaultFormFields); 
    const {email,password} = Champs;

    const handlechange = (event) => {
        const {name,value} = event.target;
        setChamps({...Champs,[name]:value})
    }

    const resetformFields = () => {
        setChamps(defaultFormFields);
    }

    const logGoogle = async () =>{
        await signInpopup();
    }

    const signinhandler = async (event) =>{
        event.preventDefault();

        try {
            await SignInEmailAndPasswordAuth(email,password);
            resetformFields();

        } catch (error) {
            if(error.code === "auth/user-not-found"){
                alert('User not found')
            }

            if(error.code === "auth/wrong-password"){
                alert('Wrong Password')
            }

           console.error(error)
        }
    }

    return ( 
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={signinhandler}>
                <FormInput label='email' type="email" onChange={handlechange}  name="email" value={email} required/>

                <FormInput label='password' type="password" onChange={handlechange}  name="password" value={password} required/>

                <div className="button-container-2">
                    <Button type='submit' buttonType="inverted"> sign In </Button>
                    <Button type='button' buttonType="google" onClick={logGoogle}>Sign In Google</Button>
                </div>
            </form>
        </div>
        );
}
 
export default SignIn;