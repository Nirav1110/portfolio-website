"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Palette, Rocket } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Greeting */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-6">
                👋 Hello, I'm Nirav Parmar
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Frontend Developer
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8">
                Crafting beautiful and functional web experiences
              </h2>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Passionate about creating engaging and responsive web
                applications using modern technologies. I specialize in React,
                Next.js, Vue.js, and cutting-edge CSS frameworks to bring ideas
                to life.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <p className="text-sm text-muted-foreground mb-4">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Vue.js",
                  "Nuxt.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Python (Basic)",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <Button size="lg" className="min-w-[180px]">
                  <Rocket className="mr-2 h-4 w-4" />
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="min-w-[180px]">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I focus on creating exceptional digital experiences through
                clean code and thoughtful design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-background border">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground text-sm">
                  Building responsive and interactive web applications using
                  modern frameworks and libraries.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-background border">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">UI/UX Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Translating designs into pixel-perfect, accessible, and
                  user-friendly interfaces.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-background border">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Ensuring fast, efficient, and scalable web applications with
                  optimal user experience.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/skills">
                <Button variant="outline">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Explore My Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
