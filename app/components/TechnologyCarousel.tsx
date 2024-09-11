'use client';

import React from 'react';
import technologydata from '@/data.json';
import useEmblaCarousel from 'embla-carousel-react';

import TechnologyImages from './TechnologyImages';
import { useDotButton } from '../hooks/useDotButton';

interface Technology {
  name: string;
  description: string;
}

const TechnologyCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: 'x',
    breakpoints: {
      '(min-width: 1440px)': {
        axis: 'y',
      },
    },
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const technology: Technology[] = technologydata.technology;

  return (
    <section className="embla relative w-full pt-8 text-white outline outline-1 outline-blue-300 xl:pt-0">
      <div
        className="embla__viewport h-full max-h-[650px] overflow-hidden "
        ref={emblaRef}
      >
        <div className="embla__container flex h-full w-full  xl:flex-col">
          {technology.map((technologyThing) => (
            <div
              key={technologyThing.name}
              className="embla__slide flex-[0_0_100%] "
            >
              <div className="flex  w-full flex-col items-center gap-[100px] text-[#D0D6F9] xl:flex-row-reverse xl:items-center xl:justify-center ">
                <TechnologyImages technologyThing={technologyThing} />

                <div className="flex w-full flex-1 flex-col items-center justify-center   outline outline-1 outline-yellow-300 xl:w-1/2">
                  <p className="pb-2 font-barlow_condensed  text-sm leading-[17px] tracking-[2.36px]">
                    THE TERMINOLOGY...
                  </p>
                  <h2 className="pb-4 font-bellefair text-2xl uppercase leading-7 text-white">
                    {technologyThing.name}
                  </h2>
                  <p className="max-w-[327px] text-center text-[15px] leading-[25px] outline outline-1">
                    {technologyThing.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[calc(50%+10px)] justify-center gap-4  xl:left-4  xl:flex-col">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full font-bellefair leading-[18.34px] text-[#0B0D17] ${
              index === selectedIndex
                ? 'bg-white'
                : 'bg-[#FFFFFF80] xl:hover:border xl:hover:border-white xl:hover:bg-[#0B0D17]'
            }`}
            onClick={() => onDotButtonClick(index)}
          >
            {index !== selectedIndex && (
              <div className="absolute h-6 w-6 rotate-45 transform bg-[#0B0D17]"></div>
            )}
            <span
              className={`${
                index !== selectedIndex ? 'relative transform  text-white ' : ''
              }`}
            >
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TechnologyCarousel;
