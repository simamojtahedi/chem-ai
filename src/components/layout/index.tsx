import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-lg lg:max-w-5xl min-h-screen flex flex-col mx-auto">
      <Header />
      <div className="flex-1 flex min-h-full pb-[100px] pt-14">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
