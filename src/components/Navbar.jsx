import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between py-3 mx-6 mb-10 lg:flex-row">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold py-2">
          <span className="text-blue-900">Hungry</span>
          <span className="text-amber-600 bg-lime-500	 py-1 px-2 rounded-xl">
            Hub
          </span>
        </h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search Here"
          autoComplete="off"
          className="p-3 border border-gray-500 outline-none rounded-lg w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
