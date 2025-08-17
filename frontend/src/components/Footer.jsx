"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const handleSocialClick = (type) => {
  switch (type) {
    case "email":
      window.open("mailto:niravparmar7612@gmail.com", "_blank");
      break;
    case "linkedin":
      window.open(
        "https://www.linkedin.com/in/nirav-parmar-6b89502a2",
        "_blank"
      );
      break;
    case "github":
      window.open("https://github.com/Nirav1110", "_blank");
      break;
  }
};

export function Footer() {
  return (
    <footer className="py-8 border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground">© 2025 Nirav Parmar</p>
              <p className="text-sm text-muted-foreground mt-1">
                Thanks for visiting! Feel free to reach out for collaboration
                opportunities.
              </p>
            </div>

            {/* Contact & Social Links */}
            <div className="flex items-center gap-4">
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </Link>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick("github")}
                  title="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick("linkedin")}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick("email")}
                  title="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
