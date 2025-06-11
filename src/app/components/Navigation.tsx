import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md transition-shadow delay-200" : "bg-transparent transition-shadow delay-100"
      } ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}
      style={{ transform: showNav ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s, opacity 0.3s" }}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">◉◉</div>
        <div className="flex ml-50 gap-10 text-md font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="text-xs text-right">
          <p>📍 Metro Manila | Philippines</p>
          <p className="text-gray-500">22 Nov 23</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
