import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../signup/Signup.jsx";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-black px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-md bg-slate-50 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Login <span className="text-amber-600">Chit Chat</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="text-sm text-gray-900">
            Don't have an account?{" "}
            <Link to="/Signup" className="text-grey-400 hover:underline">
              Sign up
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
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
