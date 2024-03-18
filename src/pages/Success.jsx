import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center	h-screen overflow-y-hidden">
      {loading === true ? (
        <ThreeDots
          visible={true}
          height="50"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div className="overflow-y-hidden">
          <h1 className="font-bold text-center">Order Successful!</h1>
          <p className="font-semibold text-l text-center">
            Your order has been successfully placed!!!
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
