import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import useLoader from "@/hooks/useLoader";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { LayoutProps } from "@/types/global";
import AuthProvider from "@/context/AuthenticationContext";

const Layout: FC<LayoutProps> = ({ children }) => {
  const isLoading = useLoader(800);

  return (
    <>
      <AuthProvider>
        <Navbar />
        <div className="my-1 flex">
          <Sidebar />
          <main className="w-full px-4 lg:px-20 lg:py-2 flex flex-col">
            <Breadcrumbs />
            {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}
          </main>
        </div>
      </AuthProvider>
    </>
  );
};

export default Layout;
