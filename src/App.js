import Home from "./routers/Home";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routers/Navigation";
import Shop from "./routers/Shop";
import SignIn from "./routers/SignIn";

const App = () => {   
  return (
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>
      </Routes>
  );
}

export default App;
