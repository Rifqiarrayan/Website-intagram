import React from "react";
import vid from "./assets/vid.mp4";

export default function Welcome() {
  return (
    <section
      id="Welcome"
      className="relative min-h-screen pt-16 text-white flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vid}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Share your moments, build your brand.
        </h1>
        <p className="text-lg md:text-xl">
          Join millions on Instagram to connect, create, and inspire. Whether
          you're a creator, a business, or just love capturing life — Instagram
          is where your story begins.
        </p>
      </div>
    </section>
  );
}
