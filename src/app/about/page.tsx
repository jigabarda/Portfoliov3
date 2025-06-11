"use client";

import React, { useState } from "react";
import Image from "next/image";
import Profile from "@/img/profile.jpg";

const profileImages = [Profile, Profile, Profile, Profile];

const About = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="h-screen bg-green-300 panel flex items-center justify-center">
      <div className="grid md:grid-cols-2 w-full  px-50">
        {/* Left Side: Profile Section */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold mb-6 text-[#426B69]">
            About Me
          </h1>
          <p className="text-lg text-[#426B69] max-w-2xl">
            Hi! I&apos;m James Ivan Gabarda, a passionate web developer and
            UI/UX designer. I love building beautiful, functional digital
            experiences and bringing creative ideas to life. Welcome to my
            portfolio!
          </p>
          {/* Main Profile Image - Square */}
          <Image
            src={profileImages[selectedImage]}
            alt="Profile"
            className="w-128 h-128 rounded-2xl object-cover shadow-lg mb-4"
            priority
          />
          {/* 4 Smaller Images Below - Square */}
          <div className="flex space-x-4 mb-6 ">
            {profileImages.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Profile ${idx + 1}`}
                width={64}
                height={64}
                className={`w-29 h-29 rounded-lg object-cover shadow cursor-pointer ${
                  selectedImage === idx ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Tech Stack Section */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8 text-[#426B69]">Tech Stack</h2>
          <div className="grid grid-cols-6 gap-8">
            {/* Tech stack images and icons */}
            <Image
              src="https://www.svgrepo.com/show/354112/nextjs.svg"
              alt="Next.js"
              width={64}
              height={64}
              className="w-16 h-16 bg-white rounded-lg p-2"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://www.svgrepo.com/show/374167/vite.svg"
              alt="Vite"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
              alt="Tailwind CSS"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://www.svgrepo.com/show/354512/vercel.svg"
              alt="Vercel"
              width={64}
              height={64}
              className="w-16 h-16 bg-white rounded-lg p-2"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
              alt="Netlify"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://www.svgrepo.com/show/376337/node-js.svg"
              alt="Node.js"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              width={64}
              height={64}
              className="w-16 h-16 bg-white rounded-lg p-2"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"
              alt="Bitbucket"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
              alt="SQL"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              alt="SQLite"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
              alt=".NET (C#)"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="npm"
              width={64}
              height={64}
              className="w-16 h-16 bg-white rounded-lg p-2"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
              alt="Postman"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
