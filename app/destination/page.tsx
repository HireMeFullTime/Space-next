'use client';

import data from '@/data.json';
import europaImage from '@/public/destination/image-europa.webp';
import marsImage from '@/public/destination/image-mars.webp';
import moonImage from '@/public/destination/image-moon.webp';
import titanImage from '@/public/destination/image-titan.webp';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import PageTitle from '../components/PageTitle';

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
    <div className="flex w-full flex-col items-center overflow-y-auto ">
      <PageTitle number="01" text="Pick your destination" />
      <div className="xl:-ml-[90px] xl:flex xl:gap-40 xl:pt-16">
        <div className="mb-[26px] mt-8 flex justify-center md:mb-[50px] md:mt-[60px] xl:mt-[30px] ">
          <Image
            src={imagesMap[activeTab]}
            alt={activeTab}
            width={170}
            height={170}
            className="md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]"
            placeholder="blur"
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-center xl:max-w-[445px] xl:items-start">
          {/* tabs titles*/}

          <div className="flex gap-7 text-sm xl:gap-9 xl:text-base">
            {destinations.map((destination) => (
              <button
                key={destination.name}
                onClick={() => setActiveTab(destination.name)}
                className={`pb-2 font-barlow_condensed uppercase leading-[17px] tracking-[2.3625px] text-[#D0D6F9] md:leading-[19px] md:tracking-[2.7px] ${
                  activeTab === destination.name
                    ? 'border-b-[3px] border-white tracking-[2.36px] text-white'
                    : 'border-b-[3px] border-transparent hover:border-white hover:opacity-50'
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
                  className="flex flex-col items-center md:max-w-[573px] md:pb-14 xl:items-start"
                >
                  <h2 className="pt-5 font-bellefair text-[56px] uppercase leading-[64px] text-white md:text-[80px]  md:leading-[92px] xl:pt-10 xl:text-[100px] xl:leading-[115px]">
                    {destination.name}
                  </h2>
                  <p className="text-center font-barlow text-[15px] leading-[25px] text-[#D0D6F9] md:pt-[10px] md:text-base md:leading-7 xl:px-0 xl:text-left xl:text-lg xl:leading-8">
                    {destination.description}
                  </p>
                  <hr className="my-8 w-full border-[#383B4B] md:mt-12" />
                  <div className="gap-7 md:flex">
                    <p className="flex max-w-[216px] flex-wrap justify-center text-center font-barlow_condensed text-sm uppercase leading-[17px] tracking-[2.36px] text-[#D0D6F9] xl:justify-start">
                      AVG. Distance
                      <span className="mb-8 mt-3 font-bellefair text-[28px] leading-8 text-white md:mb-0">
                        {destination.distance}
                      </span>
                    </p>
                    <p className="flex max-w-[216px] flex-wrap justify-center text-center font-barlow_condensed text-sm uppercase leading-[17px] tracking-[2.36px] text-[#D0D6F9] xl:justify-start">
                      EST. Travel Time
                      <span className="mt-3 font-bellefair text-[28px] leading-8 text-white md:mb-0">
                        {destination.travel}
                      </span>
                    </p>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
