import { createContext, useState, useEffect } from "react";
import { CreateUserDocument, onAuthStateChangedListener } from "../utils/Firebase";

export const Usercontext = createContext({
    Currentuser:null,
    setCurrentuser: () => null
})

export const Userprovider = ({children}) => {

    const [Currentuser,setCurrentuser] = useState(null);
    const value = {Currentuser, setCurrentuser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if(user){
                CreateUserDocument(user);
            }
            setCurrentuser(user)
        })
        return unsubscribe
    },[])

    return  <Usercontext.Provider value={value}>
                {children}
            </Usercontext.Provider>
}