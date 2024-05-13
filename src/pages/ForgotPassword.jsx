import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2 className="uppercase">Forgot password recovery</h2>
        <form>
          <input
            type="email"
            placeholder="Enter email"
            className="outline-none border-none px-10 py-5 w-[300px] rounded-md text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
