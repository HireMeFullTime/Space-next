import anoushehDesktop from '@/public/crew/desktop/anousheh-desktop.webp';
import anoushehMobile from '@/public/crew/mobile/anousheh-mobile.png';
import anoushehTablet from '@/public/crew/tablet/anousheh-tablet.png';
import douglasDesktop from '@/public/crew/desktop/douglas-desktop.webp';
import douglasMobile from '@/public/crew/mobile/douglas-mobile.png';
import douglasTablet from '@/public/crew/tablet/douglas-tablet.png';
import markDesktop from '@/public/crew/desktop/mark-desktop.webp';
import markMobile from '@/public/crew/mobile/mark-mobile.png';
import markTablet from '@/public/crew/tablet/mark-tablet.png';
import victorDesktop from '@/public/crew/desktop/victor-desktop.webp';
import victorMobile from '@/public/crew/mobile/victor-mobile.png';
import victorTablet from '@/public/crew/tablet/victor-tablet.png';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface CrewMember {
  name: string;
  role: string;
  bio: string;
}

interface CrewImagesProps {
  crewMember: CrewMember;
}

const crewMapMobile: { [key: string]: StaticImageData } = {
  'Anousheh Ansari': anoushehMobile,
  'Douglas Hurley': douglasMobile,
  'Mark Shuttleworth': markMobile,
  'Victor Glover': victorMobile,
};

const crewMapTablet: { [key: string]: StaticImageData } = {
  'Anousheh Ansari': anoushehTablet,
  'Douglas Hurley': douglasTablet,
  'Mark Shuttleworth': markTablet,
  'Victor Glover': victorTablet,
};

const crewMapDesktop: { [key: string]: StaticImageData } = {
  'Anousheh Ansari': anoushehDesktop,
  'Douglas Hurley': douglasDesktop,
  'Mark Shuttleworth': markDesktop,
  'Victor Glover': victorDesktop,
};

const CrewImages: FC<CrewImagesProps> = ({ crewMember }) => {
  return (
    <div className="flex w-full justify-center border-b-[1px] border-[#383B4B] md:border-none">
      <Image
        src={crewMapMobile[crewMember.name]}
        alt={crewMember.name}
        className="md:hidden"
      />

      <Image
        src={crewMapTablet[crewMember.name]}
        alt={crewMember.name}
        className="hidden md:block xl:hidden"
      />

      <Image
        src={crewMapDesktop[crewMember.name]}
        alt={crewMember.name}
        className="hidden xl:block xl:h-[622px] xl:w-auto"
      />
    </div>
  );
};

export default CrewImages;
