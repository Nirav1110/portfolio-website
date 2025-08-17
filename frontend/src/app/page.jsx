"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-muted-foreground">
          This is the home page with dark/light mode toggle
        </p>
      </div>
    </div>
  );
};

export default HomePage;
