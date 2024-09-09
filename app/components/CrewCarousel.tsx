'use client';

import React from 'react';
import crewData from '@/data.json';
import useEmblaCarousel from 'embla-carousel-react';

import CrewImages from './CrewImages';
import { DotButton } from './EmblaCarouselDotButton';
import { useDotButton } from '../hooks/useDotButton';

interface Crew {
  name: string;
  role: string;
  bio: string;
}

const CrewCarousel: React.FC = () => {
  const crew: Crew[] = crewData.crew;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla relative  max-w-full  ">
      <div
        ref={emblaRef}
        className="embla__viewport w-full overflow-hidden  md:h-full md:max-h-[863px]  "
      >
        <div className="embla__container flex  w-full ">
          {crew.map((crewMember) => (
            <div key={crewMember.name} className="flex-[0_0_100%]">
              <div className=" flex  w-full flex-col items-center pt-8  text-white md:flex-col-reverse md:gap-[101px] xl:flex-row-reverse xl:items-start xl:gap-0  ">
                <CrewImages crewMember={crewMember} />
                <div className="pt-[74px] text-center md:pt-5 xl:w-full xl:max-w-[488px]  xl:pt-[122px] xl:text-left">
                  <p className="pb-2 font-bellefair uppercase leading-[18px] opacity-50 md:pb-0 md:text-2xl md:leading-7 xl:text-[32px] xl:leading-9">
                    {crewMember.role}
                  </p>
                  <h2 className="pb-4 font-bellefair text-2xl uppercase leading-7 md:pb-4 md:pt-2  md:text-[40px] md:leading-[46px] xl:py-5 xl:text-[56px] xl:leading-[64px]">
                    {crewMember.name}
                  </h2>
                  <p className="max-w-[327px] font-barlow text-[15px] leading-6  text-[#D0D6F9] md:max-w-[458px] md:text-base md:leading-7 xl:text-lg xl:leading-8 ">
                    {crewMember.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="embla__controls">
          <div className="embla__dots absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 translate-y-4 gap-4 md:-translate-y-[163px] xl:left-0 xl:translate-x-0 xl:translate-y-[194px]">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`embla__dot h-[10px] w-[10px] cursor-pointer rounded-full bg-[#ffffff2b] after:flex after:h-[10px] after:w-[10px] after:rounded-full after:content-[''] xl:h-[15px] xl:w-[15px] xl:after:h-[15px] xl:after:w-[15px] ${
                  index === selectedIndex
                    ? ' embla__dot--selected after:bg-white'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewCarousel;
