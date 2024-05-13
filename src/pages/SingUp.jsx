import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { userName, email, password } = formData;

  return (
    <section className="h-screen bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden p-5">
      <div className="container h-full px-6 py-16 mx-auto flex items-center justify-center overflow-y-hidden">
        <div className="w-full max-w-md">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              SIGN UP
            </h2>
            <form className="flex justify-center items-center flex-col w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  id="typeEmailX"
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  id="typeEmailX"
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="typePasswordX"
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="form-control block  px-14 py-5 text-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring bg-light-blue-900 font-bold cursor-pointer"
              >
                Login
              </button>
            </form>
            <p className="text-sm text-center text-gray-400 mt-6">
              Already have an account?
              <Link to="/sign-in" className="text-white font-bold no-underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
