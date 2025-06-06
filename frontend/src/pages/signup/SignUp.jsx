import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";
import GenderCheckbox from "./GenderCheckbox.jsx";
import Login from "../login/login.jsx"; 


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  //const [loading, setLoading] = useState(false);
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center text-black px-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="w-full max-w-md bg-slate-50 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Sign Up <span className="text-amber-600">Chit Chat</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="John Doe"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="johndoe"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <div className="text-sm text-gray-900">
            Already have an account?{" "}
            <Link to="/Login" className="text-grey-400 hover:underline">
              Login
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-2 rounded-md font-medium text-white transition duration-200 ${
              loading
                ? "bg-amber-800 cursor-not-allowed opacity-70"
                : "bg-amber-500 hover:bg-amber-600"
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 mx-auto border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
