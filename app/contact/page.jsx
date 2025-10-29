'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-6">
        <h1 className="text-3xl font-medium mb-4">Contact</h1>
        <p className="text-gray-600 max-w-3xl mb-4">
          Got a question, partnership idea, or a product suggestion you’d like to
          see in the store? I’d love to hear from you. I typically reply within
          24 hours on weekdays. For urgent order issues, include your order ID so
          I can help you faster.
        </p>
        <div className="space-y-2 text-gray-700">
          <p>Phone: +1-234-567-890</p>
          <p>
            Email: <a className="text-orange-600 hover:underline" href="mailto:contact@tommywebdev.com">contact@tommywebdev.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;


