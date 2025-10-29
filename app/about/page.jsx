'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-12">
        <h1 className="text-3xl font-medium mb-4">About Us</h1>
        <p className="text-gray-600 max-w-3xl">
          I’m Tommy Web Dev — a builder who loves thoughtful design and fast,
          reliable tech. This store is my small corner of the web where I share
          products I actually enjoy using. No fluff: just quality picks,
          practical ideas, and a smooth shopping experience that respects your
          time.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;


