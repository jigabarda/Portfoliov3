"use client";

import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import About from "./about/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./projects/page";
import Services from "./services/page";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel as Element,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        
        <section id="home" className="h-screen bg-white panel">
          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="flex flex-col justify-center ml-50 mt-30">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                Hey There,
                <span className="text-[#81A684]">
                  <br />
                  I&apos;m
                </span>
                James Ivan Gabarda
              </h1>
              <p className="text-[#426B69] mt-6 max-w-md">
                Welcome to my portfolio! Explore my creative journey through web
                development and UI/UX design, where ideas come to life.
              </p>

              {/* Socials */}
              <div className="flex space-x-4 mt-6">
                <button className="border border-black w-10 h-10 rounded-full text-black flex items-center justify-center text-sm hover:bg-[#E8F4FB] hover:text-[#0077B5] hover:border-[#0077B5] transition-all duration-300 ease-in-out">
                  <i className="fab fa-linkedin"></i>
                </button>
                <button className="border border-black w-10 h-10 rounded-full flex items-center justify-center text-sm hover:bg-[#FDE8ED] hover:text-[#E4405F] hover:border-[#E4405F] transition-all duration-300 ease-in-out">
                  <i className="fab fa-instagram"></i>
                </button>
                <button className="border border-black w-10 h-10 rounded-full flex items-center justify-center text-sm hover:bg-[#E7F3FF] hover:text-[#1877F2] hover:border-[#1877F2] transition-all duration-300 ease-in-out">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="border border-black w-10 h-10 rounded-full flex items-center justify-center text-sm hover:bg-[#E5F6FD] hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 ease-in-out">
                  <i className="fab fa-twitter"></i>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-10 mt-10">
                <div>
                  <h2 className="text-3xl font-bold">+250k</h2>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Videos that reaching a wide audience and give lasting
                    impression
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">+800k</h2>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Hours watched, engaging storytelling that captivates viewers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="relative w-104 h-102 mx-auto mt-50">
              {/* Blob Background */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-300 to-pink-400 rounded-[70%_70%_50%_70%/100%_50%_80%_10%] z-0"></div>

              {/* Floating Circles */}
              <div className="absolute top-4 left-2 w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center text-xs font-bold text-white z-0">
                S
              </div>
              <div className="absolute bottom-6 right-2 w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-sm font-bold text-white z-0">
                E
              </div>
              <div className="absolute top-8 right-0 w-4 h-4 bg-pink-300 rounded-full z-0"></div>

              {/* Profile Image */}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section id="about" className="panel">
          <About />
        </section>
      </div>
            <div>
        <section id="project" className="panel">
          <Projects />
        </section>
      </div>
                  <div>
        <section id="services" className="panel">
          <Services />
        </section>
      </div>
    </div>
  );
};

export default Page;
