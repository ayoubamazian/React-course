import { useState } from "react";
import { EmailAndPasswordAuth, CreateUserDocument } from "../utils/Firebase";
import FormInput from "../form-Input/formInput";
import Button from "../Button/Button"
import "./signup.scss"

const defaultFormFields = {
    displayName:"",
    email:"",
    password:"",
    confirmpassword:""
}

const SignUp = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmpassword} = formFields;

    console.log(formFields)

    const handlechange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

    const signuphandler = async (event) =>{
        event.preventDefault();
        if(password !== confirmpassword){
            alert("confirm password doesn't match the password")
            return;
        }

        try {
           const { user } = await EmailAndPasswordAuth(email,password)

           console.log(user)

           await CreateUserDocument(user, {displayName})


        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                alert('email already in use');
            }
            console.log('user creation encoutered an error '+error)
        }
    }

    return ( 
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={signuphandler}>
                <FormInput label='Display Name' type="text" onChange={handlechange} name="displayName" value={displayName} required/>

                <FormInput label='email' type="email" onChange={handlechange} name="email" value={email} required/>

                <FormInput label='password' type="password" onChange={handlechange} name="password" value={password} required/>

                <FormInput label='Confirm Password' type="password" onChange={handlechange} name="confirmpassword" value={confirmpassword} required/>

                <Button chidren={'Sign Up'} buttonType='inverted' type="submit" />
            </form>
        </div>
     );
}
 
export default SignUp;