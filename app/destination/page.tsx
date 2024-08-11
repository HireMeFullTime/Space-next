'use client';

import data from '@/data.json'; // Import JSON
import europaImage from '@/app/assets/destination/image-europa.webp';
import marsImage from '@/app/assets/destination/image-mars.webp';
import moonImage from '@/app/assets/destination/image-moon.webp';
import titanImage from '@/app/assets/destination/image-titan.webp';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Destination {
  name: string;
  description: string;
  distance: string;
  travel: string;
}

const imagesMap: { [key: string]: StaticImageData } = {
  Moon: moonImage,
  Mars: marsImage,
  Europa: europaImage,
  Titan: titanImage,
};

const Destination = () => {
  const destinations: Destination[] = data.destinations;
  const [activeTab, setActiveTab] = useState<string>(destinations[0].name);

  return (
    <div className="flex w-full flex-col items-center overflow-y-auto xl:flex-row">
      <h1 className="font-barlow_condensed leading-[19.2px] tracking-[2.7px] text-white">
        <span className="font-bold opacity-25">01</span> PICK YOUR DESTINATION
      </h1>
      <div className="mb-[26px] mt-8">
        <Image
          src={imagesMap[activeTab]}
          alt={activeTab}
          width={150}
          height={150}
          className="md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]"
        />
      </div>
      <div className="flex flex-col items-center">
        {/* tabs titles*/}
        <div className="flex gap-7 text-sm ">
          {destinations.map((destination) => (
            <button
              key={destination.name}
              onClick={() => setActiveTab(destination.name)}
              className={` pb-2 font-barlow_condensed uppercase leading-[17px] tracking-[2.3625px] text-[#D0D6F9] ${
                activeTab === destination.name &&
                'border-b-[3px] border-white tracking-[2.36px]'
              }`}
            >
              {destination.name}
            </button>
          ))}
        </div>

        {/* tabs content */}

        {destinations.map(
          (destination) =>
            activeTab === destination.name && (
              <div
                key={destination.name}
                className="flex flex-col items-center"
              >
                <h2 className="pt-5 font-bellefair text-[56px] uppercase leading-[64px] text-white">
                  {destination.name}
                </h2>
                <p className=" text-center font-barlow text-[15px] leading-[25px] text-[#D0D6F9] ">
                  {destination.description}
                </p>
                <hr className="my-8 w-full border-[#383B4B]" />
                <p className="flex max-w-[216px] flex-wrap justify-center text-center font-barlow_condensed text-sm uppercase leading-[17px] tracking-[2.36px] text-[#D0D6F9]">
                  AVG. Distance
                  <span className="mb-8 mt-3 font-bellefair text-[28px] leading-8 text-white">
                    {destination.distance}
                  </span>
                </p>
                <p className="flex max-w-[216px] flex-wrap justify-center text-center font-barlow_condensed text-sm uppercase leading-[17px] tracking-[2.36px] text-[#D0D6F9]">
                  EST. Travel Time
                  <span className="mb-8 mt-3 font-bellefair text-[28px] leading-8 text-white">
                    {destination.travel}
                  </span>
                </p>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Destination;
