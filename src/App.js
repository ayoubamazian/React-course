import Home from "./routers/Home";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routers/Navigation";
import Shop from "./routers/Shop";
import Authentication from "./routers/Authentication";

const App = () => {   
  return (
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="Authentication" element={<Authentication />} />
        </Route>
      </Routes>
  );
}

export default App;
