import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 lg:mt-20">
      {/* text */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-tight">
        VirtualR build tools
        <span
          className="bg-gradient-to-r from-orange-500 to-red-800
      text-transparent bg-clip-text"
        >
          {" "}
          for developers
        </span>
      </h1>

      <p className="mt-10 text-center text-lg text-neutral-300 max-w-4xl">
        VirtualR is your go-to platform for building and deploying virtual labs.
        Explore our tools and resources to enhance your development experience.
        Empower your coding journey with VirtualR.
      </p>
      {/* buttons */}
      <div className="flex justify-center my-10">
        <a
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4
        mx-3 rounded-md cursor-pointer"
          href="#"
        >
          Start for Free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      {/* videos */}
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700b shadow-orange-400 mx-2 my-4"
        >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700b shadow-orange-400 mx-2 my-4"
        >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero