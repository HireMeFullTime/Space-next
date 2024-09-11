import launchVehicleLandscape from '@/public/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '@/public/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '@/public/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '@/public/technology/image-space-capsule-portrait.jpg';
import spaceportLandscape from '@/public/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '@/public/technology/image-spaceport-portrait.jpg';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface TechnologyThing {
  name: string;
}

interface TechnologyImagesProps {
  technologyThing: TechnologyThing;
}

const technologyMapLandscape: { [key: string]: StaticImageData } = {
  'Launch vehicle': launchVehicleLandscape,
  Spaceport: spaceportLandscape,
  'Space capsule': spaceCapsuleLandscape,
};

const technologyMapPortrait: { [key: string]: StaticImageData } = {
  'Launch vehicle': launchVehiclePortrait,
  Spaceport: spaceportPortrait,
  'Space capsule': spaceCapsulePortrait,
};
const TechnologyImages: FC<TechnologyImagesProps> = ({ technologyThing }) => {
  return (
    <div>
      <Image
        src={technologyMapLandscape[technologyThing.name]}
        alt={technologyThing.name}
        placeholder="blur"
        priority={true}
        className="h-[170px] w-auto md:w-full md:h-auto xl:hidden"
      />
      <Image
        src={technologyMapPortrait[technologyThing.name]}
        alt={technologyThing.name}
        placeholder="blur"
        priority={true}
        className="hidden xl:block"
      />
    </div>
  );
};
export default TechnologyImages;
