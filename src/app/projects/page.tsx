'use client';
import Image from 'next/image';
import React, {useState} from 'react'
import { Montserrat } from 'next/font/google'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})


const items = [
  {
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsb2J8ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Fingerprint Door Lock and RFID Attendance Tracking System",
    category: "IoT",
  },
  {
    caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Resort Reservation Application",
    category: "Web",
  },
  {
    caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    title: "Project 3",
    category: "Mobile App",
  },
  {
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Project 4",
    category: "Web",
  },
  {
    caption: "Cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    title: "Project 5",
    category: "Desktop App",
  },
  {
    caption: "Excepteur sint occaecat cupidatat non proident.",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    title: "Project 6",
    category: "Mobile App",
  },
];

const categories = ["All", "Web", "Mobile", "Desktop", "IoT"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className='h-300 bg-red-300 panel transition-colors duration-500'>
      <h2 className='text-center font-semibold font-montserrat text-5xl pt-8 pb-4'>Projects</h2>
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cursor-pointer group relative px-2 py-2 font-semibold border-none bg-transparent text-red-500 transition-colors duration-200 focus:outline-none
              ${selectedCategory === cat ? 'border-b-2 border-red-500 text-red-700' : 'hover:text-red-700'}`}
            style={{ boxShadow: 'none' }}
            onClick={() => setSelectedCategory(cat)}
          >
            <span>{cat}</span>
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out origin-left
                ${selectedCategory === cat ? 'w-full h-1' : 'w-0 h-1 group-hover:w-full'}`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
      {/* Main Grid */}
      <div className="grid grid-cols-3 px-50 grid-rows-2 gap-12">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="relative bg-white rounded-lg shadow flex flex-col items-center transition-colors duration-500">
            <Image 
              src={item.image} 
              alt={item.title} 
              width={400} 
              height={160} 
              className="w-full h-60 rounded-t-lg object-cover mb-4" 
            />
            <h3 className="font-bold text-center text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
