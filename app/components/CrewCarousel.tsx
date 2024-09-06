'use client';

import React from 'react';
import anoushehMobile from '@/public/crew/mobile/anousheh-mobile.png';
import crewData from '@/data.json';
import douglasMobile from '@/public/crew/mobile/douglas-mobile.png';
import markMobile from '@/public/crew/mobile/mark-mobile.png';
import useEmblaCarousel from 'embla-carousel-react';
import victorMobile from '@/public/crew/mobile/victor-mobile.png';
import Image, { StaticImageData } from 'next/image';

import { DotButton } from './EmblaCarouselDotButton';
import { useDotButton } from '../hooks/useDotButton';

interface Crew {
  name: string;
  role: string;
  bio: string;
}

const crewMapMobile: { [key: string]: StaticImageData } = {
  'Anousheh Ansari': anoushehMobile,
  'Douglas Hurley': douglasMobile,
  'Mark Shuttleworth': markMobile,
  'Victor Glover': victorMobile,
};
const CrewCarousel: React.FC = () => {
  const crew: Crew[] = crewData.crew;
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla relative h-fit outline outline-1 outline-green-300">
      <div
        ref={emblaRef}
        className="embla__viewport w-full outline outline-1 outline-yellow-300"
      >
        <div className="embla__container flex  w-full">
          {crew.map((crewMember) => (
            <div key={crewMember.name} className="flex-[0_0_100%] ">
              <div className=" flex w-full flex-col items-center pt-8 text-white">
                <div className=" ] flex w-full  justify-center border-b-[1px] border-[#383B4B]">
                  <Image
                    src={crewMapMobile[crewMember.name]}
                    alt={crewMember.name}
                  />
                </div>
                <div className="pt-[74px] text-center">
                  <p className="pb-2 font-bellefair uppercase leading-[18px] opacity-50">
                    {crewMember.role}
                  </p>
                  <h2 className="pb-4 font-bellefair text-2xl uppercase leading-7">
                    {crewMember.name}
                  </h2>
                  <p className="max-w-[327px]  font-barlow text-[15px] leading-6 text-[#D0D6F9] ">
                    {crewMember.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="embla__controls outline outline-1 flex  mt outline-red-600
        "
        >
          <div className="embla__dots gap-4 flex absolute left-1/2 top-1/2 z-50 -translate-x-1/2 translate-y-4">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot after:w-[10px] after:h-[10px] after:rounded-full after:flex after:content-[''] bg-[#ffffff2b] rounded-full cursor-pointer w-[10px] h-[10px] ${
                  index === selectedIndex ? ' embla__dot--selected after:bg-white' : ''
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
