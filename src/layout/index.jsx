import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-svh max-w-7xl mx-auto">
        <main className="flex-1 max-w-7xl">
          <div className="">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
