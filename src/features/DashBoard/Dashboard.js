import React from "react";
import Navbar from "../components/Navbar";
import FAQ from "../components/Faq";

export default function DashBoard() {
  return (
    <section className="h-auto min-h-screen w-auto bg-gray-200">
     <Navbar/>
     <FAQ/>
    </section>
  );
}
