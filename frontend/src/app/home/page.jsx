"use client";
import React, { useEffect } from "react";
import { toast } from "sonner";

const HomePage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.error("Hello home page is here now");
    }, 100); // wait 100ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-5xl font-bold text-white mb-8">Home</div>
        <div className="text-xl text-white/90">
          This is the home page with Tailwind CSS properly applied.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
