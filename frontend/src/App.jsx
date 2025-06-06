import { Routes, Route , Navigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext.jsx";

function App() {
      const {authUser} = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={ authUser ?  <Home />  : <Navigate to = {"/login"} />} />
        <Route path="/login" element={ authUser ? <Navigate to = "/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to = "/" /> : <SignUp />} />
        {/* Add more routes as needed */}
      </Routes>

      <Toaster />

    </>
  );
}

export default App;

