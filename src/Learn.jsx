import React, { useState } from 'react';

export default function Learn() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'section1', img: 1, title: '1.1: Instagram Overview' },
    { id: 'section2', img: 2, title: '1.2: Stand Out on Instagram' },
    { id: 'section3', img: 3, title: '1.3: Stay Safe' },
    { id: 'section4', img: 4, title: '1.4: Community Guidelines' },
    { id: 'section5', img: 5, title: '2.1: Feel It Reel It' },
    { id: 'section6', img: 6, title: '2.2: Connect with Stories' },
    { id: 'section7', img: 7, title: '2.3: Common Questions and Myths' },
    { id: 'section8', img: 8, title: '2.4: Collaborate with Remix & Collabs' },
  ];

  const renderCards = (startIndex) =>
    sections.slice(startIndex, startIndex + 4).map(({ id, img, title }) => (
      <div
        key={id}
        className={`shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
          activeSection === id ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={() => handleClick(id)}
      >
        <img
          src={`https://i.pravatar.cc/300?img=${img}`}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        </div>
      </div>
    ));

  return (
    <div className="min-h-screen bg-white text-black">
      {/* PART I */}
      <section id="learn" className="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          PART – I: Manage Your Presence
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 max-w-3xl">
          Learn how to optimize your profile and stand out on Instagram. Understand the community
          guidelines, stay safe & get buzzing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderCards(0)}
        </div>
      </section>

      {/* PART II */}
      <section id="create" className="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          PART – II: Create
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 max-w-3xl">
          Build your brand and share it with the world. Get inspired by the Instagram Rockstars and
          learn the best practices for all surfaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderCards(4)}
        </div>
      </section>
    </div>
  );
}
