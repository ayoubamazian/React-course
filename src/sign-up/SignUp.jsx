import { useState } from "react";
import { EmailAndPasswordAuth, CreateUserDocument } from "../utils/Firebase";

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
            if(error.code == "auth/email-already-in-use"){
                alert('email already in use');
            }
            console.log('user creation encoutered an error '+error)
        }
    }

    return ( 
        <div>
            <h1>Sign-Up With your e-mail and password</h1>
            <form onSubmit={signuphandler}>
                <label htmlFor="">Display Name</label>
                <input type="text" onChange={handlechange} name="displayName" value={displayName} required/>

                <label htmlFor="">E-mail</label>
                <input type="email" onChange={handlechange} name="email" value={email} required/>

                <label htmlFor="">Passwor</label>
                <input type="password" onChange={handlechange} name="password" value={password} required/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" onChange={handlechange} name="confirmpassword" value={confirmpassword} required/>

                <input type="submit" value='Sign-up'/>
            </form>
        </div>
     );
}
 
export default SignUp;