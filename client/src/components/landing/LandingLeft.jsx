import React from "react";
import Logo from "../common/Logo";

const LandingLeft = () => {
  return (
    <div className="flex flex-col justify-center h-full p-10">
      <Logo />
      <p className="mt-4 text-gray-600">
        Plan your future with smart SIP insights.
      </p>

      {/* Animation will come here later */}
      <div className="mt-10 text-sm text-gray-400">
        [ SIP animation placeholder ]
      </div>
    </div>
  );
};

export default LandingLeft;
