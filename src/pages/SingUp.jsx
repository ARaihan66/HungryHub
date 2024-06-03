import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { userName, email, password } = formData;

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Network response was not ok!");
        return;
      }

      const data = await response.json();
      const { success } = data;

      if (success) {
        navigate("/sign-in");
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="h-screen bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden p-5">
      <div className="container h-full px-6 py-16 mx-auto flex items-center justify-center overflow-y-hidden">
        <div className="w-full max-w-md">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              SIGN UP
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center flex-col w-full "
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  id="typeEmailX"
                  onChange={handleOnChange}
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Mr. John Deo"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  id="typeEmailX"
                  onChange={handleOnChange}
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="johndeo@gmail.com"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="typePasswordX"
                  onChange={handleOnChange}
                  className="form-control block w-[300px] px-4 py-5 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="form-control block px-14 py-5 text-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring bg-light-blue-900 font-bold cursor-pointer"
              >
                Sign Up
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
