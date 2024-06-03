import React from "react";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2 className="uppercase">Reset Your Password</h2>
        <form>
          <div>
            <input
              type="number"
              placeholder="Enter OTP"
              className="outline-none border-none px-10 py-5 w-[300px] rounded-md text-black"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter New Password"
              className="outline-none border-none my-5 px-10 py-5 w-[300px] rounded-md text-black"
            />
          </div>

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
