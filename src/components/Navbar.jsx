import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  return (
    <nav className="flex flex-col justify-between py-3 mx-6 mb-10 lg:flex-row">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold py-2">
          <span className="text-blue-900 bg-white py-1 px-2">Hungry</span>
          <span className="bg-blue-900 text-white	 py-1 px-2 ">Hub</span>
        </h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          placeholder="Search Here"
          autoComplete="off"
          className="p-3 border border-gray-500 outline-none rounded-lg w-full lg:w-[25vw]"
        />
      </div>

      {isAuth ? (
        <div>
          <button className="bg-blue-500 p-3 rounded-md font-bold cursor-pointer no-underline	 text-white md:mx-2 hover:bg-gray-400 my-3 md:my-0">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link
            to="/sign-in"
            className="bg-blue-500 p-3 rounded-md font-bold cursor-pointer no-underline	 text-white mx-2 hover:bg-gray-400m my-3 md:my-0"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="bg-blue-500 p-3 rounded-md font-bold cursor-pointer no-underline	 text-white mx-2 hover:bg-gray-400 my-3 md:my-0"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
