import React from "react";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";

const MainLayout = ({ children, ...props }) => (
  <>
    <Header />
    <main className="container mx-auto p-5">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
