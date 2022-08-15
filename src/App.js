import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { CreateUserDocument, onAuthStateChangedListener } from "./utils/Firebase";
import { setCurrentuser } from "./store/user/user.action";

import Home from "./routers/Home";
import Navigation from "./routers/Navigation";
import Shop from "./routers/Shop";
import Authentication from "./routers/Authentication";
import CheckOut from "./Components/CheckOut/CheckOut";

const App = () => {   

    const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>{
        if(user){
            CreateUserDocument(user);
        }
        dispatch(setCurrentuser(user))
    })
    return unsubscribe
  },[dispatch])

  return (
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="Authentication" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
  );
}

export default App;
