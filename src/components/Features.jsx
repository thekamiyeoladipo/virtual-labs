import { features } from '../constants';
import { useRef } from 'react';

const Features = () => {
  return (
    <div
      id="features"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span
          className="font-medium bg-neutral-900 text-orange-500 rounded-full px-2 py-1 uppercase"
        >
          {" "}
          Features
        </span>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl mt-20 tracking-wide lg:mt-10"
        >
          Easily build
          <span
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"
          >
            {" "}
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="flex bg-neutral-900/30 p-4 rounded-lg h-full transition-all">
              <div
                className="flex justify-center items-center text-orange-700 mx-6 h-10 w-10 p-2 bg-neutral-900 rounded-full"
              >
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-6 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
 