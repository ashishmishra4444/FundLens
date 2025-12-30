import React from "react";
import Login from "./Login";

const Header = () => {
  return (
    <header className="relative z-10 min-h-screen w-full overflow-hidden items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-16 ">
      {/* relative z-10 flex min-h-screen items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-16 */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div
          className="
            grid w-full gap-12
            grid-cols-1
            lg:grid-cols-2
          "
        >
          {/* LEFT SECTION */}
          <div
            className="
              flex flex-col justify-center
              text-center lg:text-left
              text-white
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold tracking-tight
              "
            >
              FUNDLENS
            </h1>

            <p
              className="
                mt-4
                max-w-xl
                mx-auto lg:mx-0
                text-sm
                sm:text-base
                md:text-lg
                text-gray-300
              "
            >
              A goal-based SIP planning platform that helps you invest smarter,
              earlier, and with confidence.
            </p>

            <p
              className="
                mt-6
                text-xs
                sm:text-sm
                tracking-widest
                uppercase
                text-gray-400
              "
            >
              Plan • Invest • Grow
            </p>
          </div>

          {/* RIGHT SECTION (LOGIN CARD) */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                w-full max-w-md
                lg:mr-6 xl:mr-12
                lg:translate-x-6 xl:translate-x-10
            "
            >
              <Login />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
