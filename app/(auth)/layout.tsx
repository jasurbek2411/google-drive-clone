import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebat";
import { ChildProps } from "@/types";
import React from "react";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <main className="flex items-center justify-center w-full min-h-[90vh] z-50 relative">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
