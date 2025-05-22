"use client";

import React, { useEffect } from "react";
import { motion } from 'framer-motion'
import Contact from "./Contact";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll for navbar links
    const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }else{
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide text-indigo-400 drop-shadow-lg">
            Kuldeep
          </h1>
          <ul className="flex gap-8 text-sm font-semibold">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative group before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-indigo-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight leading-tight text-indigo-400 drop-shadow-lg"
        >
          Hi, I'm Kuldeep Kumar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-xl max-w-xl text-gray-300"
        >
          Lead Frontend Engineer | React Enthusiast | UI/UX Focused Developer
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 inline-block rounded-full bg-indigo-500 px-8 py-3 font-semibold text-[#fff] shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-16 max-w-5xl mx-auto"
        aria-label="About me"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-xl p-10 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate frontend developer with 6+ years of experience in
            building scalable and performant web applications. I specialize in
            React.js and have a strong eye for design and usability. I
            currently lead the frontend team at Future HR Tech Pvt Ltd, where I
            architect intuitive and modern interfaces.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 md:px-16 max-w-6xl mx-auto"
        aria-label="Skills and technologies"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-indigo-400 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Git",
              "Framer Motion",
              "MySQL",
              "Figma",
            ].map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl py-4 shadow-md hover:shadow-indigo-600/70 cursor-default transition-shadow text-center font-semibold text-gray-200 select-none"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 max-w-6xl mx-auto"
        aria-label="Projects"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-indigo-400 text-center">
            Projects
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-300">
                Ikonwork
              </h3>
              <p className="text-gray-400 mb-4">
              Ikonwork is an intuitive and modern job portal designed to connect job seekers with employers in a seamless and efficient way. The platform streamlines the hiring process with user-friendly features and a clean, responsive UI. It aims to simplify job searching and recruitment for professionals across industries.
              </p>
              <a
                href="https://qc-ikonwork.com/"
                target="_blank"
                className="text-indigo-400 hover:underline hover:text-indigo-600"
              >
                View Project →
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-300">
                Ikonwork Hire
              </h3>
              <p className="text-gray-400 mb-4">
              IkonworkHire is a modern job portal developed to bridge the gap between employers and job seekers by offering a seamless, responsive, and user-centric interface. Designed with scalability and performance in mind, the platform caters to both individual recruiters and enterprise HR teams.

              </p>
              <a
                href="https://ikonworkhire.com/"
                target="_blank"
                className="text-indigo-400 hover:underline hover:text-indigo-600"
              >
                View Project →
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-300">
                McCoy Mart Seller Panel
              </h3>
              <p className="text-gray-400 mb-4">
                A dashboard panel for sellers to manage product listings and
                leads. Developed with React.js and integrated with backend APIs.
              </p>
              <a
                href="#"
                className="text-indigo-400 hover:underline hover:text-indigo-600"
              >
                View Project →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 md:px-16 max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-lg"
        aria-label="Work experience"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-indigo-400 text-center">
            Work Experience
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                Future HR Tech Pvt Ltd
              </h3>
              <p className="text-gray-400 italic mb-2">Lead Frontend Engineer (Feb 2021 - Present)</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Lead the frontend team and designed frontend architecture</li>
                <li>Built and maintained Ikonwork, a modern job portal</li>
                <li>Implemented scalable React components and state management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                McCoy Digital Pvt Ltd
              </h3>
              <p className="text-gray-400 italic mb-2">Junior Software Engineer (2018 - 2021)</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Managed company website frontend and improved UI/UX</li>
                <li>Developed seller portals using React.js</li>
                <li>Collaborated with backend teams for API integration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="py-20 px-6 md:px-16 max-w-4xl mx-auto"
        aria-label="Contact me"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-xl p-10 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6 text-indigo-400 text-center">
            Contact Me
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6 max-w-xl mx-auto"
          >
            <label className="flex flex-col text-gray-300 font-semibold">
              Name
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 rounded-md bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col text-gray-300 font-semibold">
              Email
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 rounded-md bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col text-gray-300 font-semibold">
              Message
              <textarea
                placeholder="Your Message"
                rows={5}
                className="mt-2 rounded-md bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              />
            </label>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section> */}
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kuldeep Kumar. All rights reserved.
      </footer>
    </main>
  );
}