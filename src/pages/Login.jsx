import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/AuthSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/api/user/sign-in", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      const { success, message } = data;

      if (response.status === 200) {
       dispatch(loginUser());
       toast.success(message);
       navigate("/")
      }

      if (response.status !== 200) {
        toast.error(message || "Login failed. Please try again.");
        return;
      }
      
    } catch (error) {
      console.error("Error logging in:", error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section className="h-screen bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden p-5">
      <div className="container h-full px-6 py-16 mx-auto flex items-center justify-center overflow-y-hidden">
        <div className="w-full max-w-md">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              SIGN IN
            </h2>
            <form onSubmit={handleOnSubmit} className="flex flex-col items-center w-full">
              <div className="mb-4 w-full max-w-md">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6 w-full max-w-md">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6 w-full max-w-md">
                <p className="text-sm text-gray-400">
                  <Link to="/forgot-password" className="text-gray-400 hover:text-white">
                    Forgot password?
                  </Link>
                </p>
              </div>
              <button type="submit" className="form-control block px-14 py-5 text-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring bg-light-blue-900 font-bold cursor-pointer">
                Login
              </button>
            </form>
            <p className="text-sm text-center text-gray-400 mt-6">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-white font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
