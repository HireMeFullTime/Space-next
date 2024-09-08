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
    <section className="embla relative ">
      <div ref={emblaRef} className="embla__viewport w-full ">
        <div className="embla__container  flex  w-full">
          {crew.map((crewMember) => (
            <div key={crewMember.name} className="  flex-[0_0_100%] ">
              <div className=" flex h-full w-full flex-col items-center  pt-8 text-white md:flex-col-reverse md:gap-[121px]">
                <CrewImages crewMember={crewMember} />
                <div className="pt-[74px] text-center md:pt-0">
                  <p className="pb-2 font-bellefair uppercase leading-[18px] opacity-50 md:pb-0 md:text-2xl md:leading-7">
                    {crewMember.role}
                  </p>
                  <h2 className="pb-4 font-bellefair text-2xl uppercase  leading-7 md:pb-0 md:text-[40px] md:leading-[46px]">
                    {crewMember.name}
                  </h2>
                  <p className="max-w-[327px] font-barlow text-[15px] leading-6 text-[#D0D6F9] md:max-w-[458px] md:text-base md:leading-7 ">
                    {crewMember.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="embla__controls  ">
          <div className="embla__dots absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 translate-y-4 gap-4 md:-translate-y-[188px]">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot h-[10px] w-[10px] cursor-pointer rounded-full bg-[#ffffff2b] after:flex after:h-[10px] after:w-[10px] after:rounded-full after:content-[''] ${
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
