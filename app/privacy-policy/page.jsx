'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-6">
        <h1 className="text-3xl font-medium mb-4">Privacy Policy</h1>
        <p className="text-gray-600 max-w-3xl">
          We respect your privacy and only use your data to process orders and
          improve your experience. We do not sell your personal information. For
          deletions or data requests, contact us at
          <span className="ml-1 text-orange-600">contact@tommywebdev.com</span>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;


