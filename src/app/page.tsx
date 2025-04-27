"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme based on system preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    setTheme(savedTheme);
    document.body.className = savedTheme + "-mode";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme + "-mode";
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="ai-nav w-full py-4 px-8 sm:px-16 flex justify-between items-center">
        <div className="font-bold text-xl ai-gradient-text">James Atom</div>
        <div className="flex gap-6">
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</Link>
          <Link href="#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
      </nav>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="ai-theme-toggle" aria-label="Toggle theme">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Hero Section */}
      <section className="ai-section w-full px-8 py-24 sm:px-16 flex flex-col items-center sm:items-start gap-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left max-w-2xl ai-gradient-text">
          Building digital experiences that matter
        </h1>
        <p className="text-lg sm:text-xl max-w-xl text-center sm:text-left text-black/85 dark:text-white/70">
          Developer, designer, and problem solver focused on creating intuitive and impactful web applications.
        </p>
        <div className="flex gap-4 mt-4">
          <Link 
            href="#contact" 
            className="ai-button-secondary"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="ai-section w-full px-8 py-16 sm:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 ai-gradient-text">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4 ai-glass-card p-6">
              <p className="text-black/85 dark:text-white/70">
                I&apos;m a passionate developer with expertise in modern web technologies. 
                With a background in design and programming, I bring a unique perspective 
                to every project I work on.
              </p>
              <p className="text-black/85 dark:text-white/70">
                My approach focuses on creating clean, efficient, and user-friendly solutions 
                that solve real problems and deliver exceptional experiences.
              </p>
            </div>
            <div className="ai-gradient-border h-64">
              <div className="ai-gradient-border-content flex items-center justify-center">
                <p className="text-center">Profile image or illustration placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Services Section */}
      <section className="ai-section w-full px-8 py-16 sm:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 ai-gradient-text">What I Do</h2>
          <div className="ai-grid">
            {[
              { title: "Web Development", desc: "Building responsive, modern websites using the latest technologies." },
              { title: "UI/UX Design", desc: "Creating intuitive interfaces and seamless user experiences." },
              { title: "Mobile Applications", desc: "Developing cross-platform mobile solutions for iOS and Android." },
              { title: "API Integration", desc: "Connecting your applications with third-party services and data sources." },
              { title: "Performance Optimization", desc: "Enhancing speed and efficiency of existing applications." },
              { title: "Consultation", desc: "Providing technical guidance and solutions for your digital needs." }
            ].map((item, index) => (
              <div key={index} className="ai-card p-6">
                <div className="ai-badge mb-3">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-black/85 dark:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="ai-section w-full px-8 py-16 sm:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 ai-gradient-text">My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "E-Commerce Platform", 
                description: "A fully responsive e-commerce platform with secure payment integration.",
                image: "/portfolio-1.jpg", 
                tech: ["React", "Node.js", "MongoDB"],
                link: "#"
              },
              { 
                title: "Health & Fitness App", 
                description: "Mobile application for tracking fitness progress and health metrics.",
                image: "/portfolio-2.jpg", 
                tech: ["React Native", "Firebase"],
                link: "#"
              },
              { 
                title: "Corporate Website", 
                description: "Modern website redesign for a financial services company.",
                image: "/portfolio-3.jpg", 
                tech: ["Next.js", "Tailwind CSS"],
                link: "#"
              },
              { 
                title: "Social Media Dashboard", 
                description: "Analytics dashboard for tracking social media performance.",
                image: "/portfolio-4.jpg", 
                tech: ["Vue.js", "D3.js", "Express"],
                link: "#"
              },
              { 
                title: "Inventory Management System", 
                description: "Custom inventory solution for retail businesses.",
                image: "/portfolio-5.jpg", 
                tech: ["Angular", "MySQL", ".NET Core"],
                link: "#"
              },
              { 
                title: "Educational Platform", 
                description: "Interactive learning platform with video courses and quizzes.",
                image: "/portfolio-6.jpg", 
                tech: ["Next.js", "GraphQL", "PostgreSQL"],
                link: "#"
              },
            ].map((project, index) => (
              <div key={index} className="ai-card overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Project Image</p>
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  /> */}
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-black/85 dark:text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="ai-badge text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="ai-button-secondary text-sm w-full flex justify-center items-center">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="#contact" className="ai-button inline-block">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="ai-section w-full px-8 py-16 sm:px-16">
        <div className="max-w-3xl mx-auto text-center ai-glass-card p-8">
          <h2 className="text-3xl font-bold mb-4 ai-gradient-text">Let&apos;s Work Together</h2>
          <p className="text-black/85 dark:text-white/70 mb-8">
            Interested in collaborating or have a project in mind? Reach out and let&apos;s create something amazing.
          </p>
          <Link 
            href="mailto:your-email@example.com" 
            className="ai-button ai-shimmer inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-8 py-8 sm:px-16 border-t border-black/10 dark:border-white/10 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-black/80 dark:text-white/60">
            © {new Date().getFullYear()} James Atom. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
