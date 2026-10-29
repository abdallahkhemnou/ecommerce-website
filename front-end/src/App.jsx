import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './components/sign-In';
import SignUp from './components/sing-Up';
function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-In" element={<SignIn />} />
        <Route path="/sign-Up" element={<SignUp />} />
      </Routes>
    </>
  );
};
export default App;