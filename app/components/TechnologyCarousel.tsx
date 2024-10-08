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
    <section className="embla relative  w-full pt-8 text-white md:pt-[60px] xl:max-h-[560px] xl:pl-[160px] xl:pt-[26px] ">
      <div className="embla__viewport h-full  overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex h-full w-full  xl:flex-col">
          {technology.map((technologyThing) => (
            <div
              key={technologyThing.name}
              className="embla__slide flex-[0_0_100%] "
            >
              <div className="flex  w-full flex-col items-center gap-[100px] text-[#D0D6F9] md:gap-40 xl:flex-row-reverse xl:items-center xl:justify-between ">
                <TechnologyImages technologyThing={technologyThing} />

                <div className="flex w-full flex-col items-center justify-center xl:w-1/2 xl:max-w-[470px] xl:items-start">
                  <p className="pb-2 font-barlow_condensed text-sm leading-[17px] tracking-[2.36px] md:pb-4  md:text-base md:leading-[19px] md:tracking-[2.7px]">
                    THE TERMINOLOGY...
                  </p>
                  <h2 className="pb-4 font-bellefair text-2xl uppercase leading-7 text-white md:text-[40px] md:leading-[46px] xl:text-[56px] xl:leading-[64.18px]">
                    {technologyThing.name}
                  </h2>
                  <p className="max-w-[327px] text-center font-barlow text-[15px] leading-[25px] md:max-w-[458px] md:text-base md:leading-7 xl:max-w-[444px] xl:text-left xl:text-lg xl:leading-8">
                    {technologyThing.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* xl-high-dpi */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[calc(50%+5px)] justify-center gap-4 md:translate-y-[calc(50%+14px)] xl:left-0 xl:top-0 xl:translate-x-0 xl:translate-y-[calc(50%-30px)] xl:flex-col xl:gap-8 high-dpi:-translate-y-1/2 high-dpi:outline high-dpi:outline-1 xl-high-dpi:translate-y-[calc(50%-30px)]">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full font-bellefair leading-[18.34px] text-[#0B0D17] md:h-[58px] md:w-[58px] xl:h-20 xl:w-20 xl:text-[32px] ${
              index === selectedIndex
                ? 'bg-white'
                : 'bg-[#FFFFFF80] xl:hover:border xl:hover:border-white xl:hover:bg-[#0B0D17]'
            }`}
            onClick={() => onDotButtonClick(index)}
          >
            {index !== selectedIndex && (
              <div className="absolute h-6 w-6 rotate-45 transform bg-[#0B0D17] md:h-[41px] md:w-[41px] xl:h-14 xl:w-14"></div>
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
